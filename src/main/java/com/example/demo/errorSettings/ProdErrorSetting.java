package com.example.demo.errorSettings;

import java.util.Map;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "")
@Component
@Profile("prod")
public class ProdErrorSetting {

    public Map<String, Object> spring;
    public Map<String, Object> notfound;
    public Map<String, Object> internal;
    public Map<String, Object> others;

    public Map<String, Object> getSpring() {
        return spring;
    }

    public void setSpring(Map<String, Object> spring) {
        this.spring = spring;
    }

    public Map<String, Object> getNotfound() {
        return notfound;
    }

    public void setNotfound(Map<String, Object> notfound) {
        this.notfound = notfound;
    }

    public Map<String, Object> getInternal() {
        return internal;
    }

    public void setInternal(Map<String, Object> internal) {
        this.internal = internal;
    }

    public Map<String, Object> getOthers() {
        return others;
    }

    public void setOthers(Map<String, Object> others) {
        this.others = others;
    }

    @Override
    public String toString() {
        return "ProdErrorSetting [notfound=" + notfound + ", internal=" + internal + ", others=" + others + "]";
    }

}
