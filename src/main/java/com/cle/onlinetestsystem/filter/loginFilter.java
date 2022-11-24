package com.cle.onlinetestsystem.filter;

import com.cle.onlinetestsystem.common.BaseContext;
import lombok.extern.slf4j.Slf4j;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter(filterName = "loginFilter",urlPatterns = "/*")
@Slf4j
public class loginFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest servletRequest = (HttpServletRequest) request;
        String requestURI = servletRequest.getRequestURI();
        log.info("拦截到请求{}",requestURI);
        HttpSession session = servletRequest.getSession();
        Long student =(Long) session.getAttribute("student");
        if(student==null){
            Long teacher =(Long) session.getAttribute("teacher");
            BaseContext.setCurrentId(teacher);
        }
        else {
            BaseContext.setCurrentId(student);
        }
        chain.doFilter(request, response);
}
}
