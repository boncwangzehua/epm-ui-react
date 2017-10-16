package com.example.demo.errorSettings;

import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix="")
@Component
@Profile("prod")
public class ProdErrorSettingSon extends ProdErrorSetting {
    
    private String heading;
    private String summary;
    private List<String> suggestions;
    
	public String getHeading() {
		return heading;
	}
	public void setHeading(String heading) {
		this.heading = heading;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public List<String> getSuggestions() {
		return suggestions;
	}
	public void setSuggestions(List<String> suggestions) {
		this.suggestions = suggestions;
	}
	
	@Override
	public String toString() {
		return "ProdErrorSettingSon [heading=" + heading + ", summary=" + summary + ", suggestions=" + suggestions
				+ "]";
	}
	
}
