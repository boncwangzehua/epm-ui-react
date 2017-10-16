package com.example.demo.errorSettings;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.ErrorAttributes;
import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;


@Controller
@Profile("dev")
public class ReactErrorController implements ErrorController{ 

    private static ReactErrorController reactErrorController;
    
    /**
     * Error Attributes in the application
     */
    @Autowired
    private ErrorAttributes errorAttributes;
    
    private final static String ERROR_PATH = "/error";

    /**
     * Controller for the ReactErrorController
     * @param errorAttributes
     */
    public ReactErrorController(ErrorAttributes errorAttributes) {
       this.errorAttributes=errorAttributes;
    }
    
    public ReactErrorController() {
       if (reactErrorController==null) {
    	   reactErrorController=new ReactErrorController(errorAttributes);
	   }
    }
    
    /**
     * Supports the JavaScript error View
     * @param request
     * @return
     */
    @RequestMapping(value=ERROR_PATH,produces="text/javascript")
    public ModelAndView errorPage(HttpServletRequest request){
    	return new ModelAndView(ERROR_PATH,getErrorAttributes(request,true));
    }
    
    /**
     * Return the path of the Error Page
     */
	@Override
	public String getErrorPath() {
		return ERROR_PATH;
	}
    
	/**
	 * Handling error attributes
	 * @param request
	 * @param includeStackTrace
	 * @return
	 */
	private Map<String, Object> getErrorAttributes(HttpServletRequest request,boolean includeStackTrace){
		RequestAttributes requestAttributes=new ServletRequestAttributes(request);
		Map<String, Object> map=this.errorAttributes.getErrorAttributes(requestAttributes, includeStackTrace);
		map.put("stack",errorAttributes.getErrorAttributes(requestAttributes, true).toString());
		return map;
	}
	
}
