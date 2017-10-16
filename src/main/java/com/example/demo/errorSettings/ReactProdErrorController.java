package com.example.demo.errorSettings;

import java.io.File;
import java.io.FileInputStream;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.DefaultErrorAttributes;
import org.springframework.boot.autoconfigure.web.ErrorAttributes;
import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;
import org.yaml.snakeyaml.Yaml;


@Component
@Controller
@Profile("prod")
public class ReactProdErrorController implements ErrorController, ErrorAttributes, HandlerExceptionResolver { 
    
	private static final String ERROR_ATTRIBUTE = DefaultErrorAttributes.class.getName()
			+ ".ERROR";
	
    private static ReactProdErrorController ReactProdErrorController;
    
    @Autowired
    private ErrorAttributes errorAttributes;
    
    @Autowired
    private ProdErrorSettingSon prodErrorSettingSon;
    
    private final static String ERROR_PATH="/error";

    public ReactProdErrorController(ErrorAttributes errorAttributes) {
       this.errorAttributes=errorAttributes;
    }
    
    public ReactProdErrorController() {
       if (ReactProdErrorController==null) {
    	   ReactProdErrorController=new ReactProdErrorController(errorAttributes);
	   }
    }
    
    @RequestMapping(value=ERROR_PATH,produces="text/javascript")
    public ModelAndView errorPage(HttpServletRequest request){
    	return new ModelAndView(ERROR_PATH,getErrorAttributes(request,true));
    }
    
	@Override
	public String getErrorPath() {
		return ERROR_PATH;
	}
    
	private Map<String, Object> getErrorAttributes(HttpServletRequest request,boolean includeStackTrace){
		RequestAttributes requestAttributes=new ServletRequestAttributes(request);
		Map<String, Object> map=this.errorAttributes.getErrorAttributes(requestAttributes, includeStackTrace);
		return map;
	}

	@Override
	public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler,
			Exception ex) {
		storeErrorAttributes(request, ex);
		return null;
	}
	
	private void storeErrorAttributes(HttpServletRequest request, Exception ex){
		request.setAttribute(ERROR_ATTRIBUTE, ex);
	}
    
	@Override
	public Map<String, Object> getErrorAttributes(RequestAttributes requestAttributes, boolean includeStackTrace) {
		Map<String, Object> errorAttributes = new LinkedHashMap<String, Object>();
		try {
			addInfo(errorAttributes, requestAttributes);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return errorAttributes;
	}
    
	@Override
	public Throwable getError(RequestAttributes requestAttributes) {
		Throwable exception = getAttribute(requestAttributes, ERROR_ATTRIBUTE);
		if (exception == null) {
			exception = getAttribute(requestAttributes, "javax.servlet.error.exception");
		}
		return exception;
	}
	
	@SuppressWarnings("unchecked")
	private <T> T getAttribute(RequestAttributes requestAttributes, String name) {
		return (T) requestAttributes.getAttribute(name, RequestAttributes.SCOPE_REQUEST);
	}
	
	private void addInfo(Map<String, Object> errorAttributes, RequestAttributes requestAttributes) throws Exception {
		Yaml yaml=new Yaml();
		ProdErrorSetting prodErrorSetting=yaml.loadAs(new FileInputStream(new File("src/main/resources/application.yml")), ProdErrorSetting.class);
		Integer status = getAttribute(requestAttributes,"javax.servlet.error.status_code");
		if (status==404) {
			errorAttributes.put("info", prodErrorSetting.getNotfound());
		} else if (status==500) {
			errorAttributes.put("info", prodErrorSetting.getInternal());
		} else {
			errorAttributes.put("info", prodErrorSetting.getOthers());
		}
	}
	
}
