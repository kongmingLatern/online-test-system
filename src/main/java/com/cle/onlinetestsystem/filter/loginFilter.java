package com.cle.onlinetestsystem.filter;

import com.alibaba.fastjson2.JSON;
import com.cle.onlinetestsystem.Utils.IpUtils;
import com.cle.onlinetestsystem.common.BaseContext;
import com.cle.onlinetestsystem.pojo.R;
import lombok.extern.slf4j.Slf4j;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter(filterName = "loginFilter",urlPatterns = "/*")
@Slf4j
public class loginFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest servletRequest = (HttpServletRequest) request;
        HttpServletResponse servletResponse = (HttpServletResponse) response;
        servletRequest.setCharacterEncoding("utf-8");
        servletResponse.setCharacterEncoding("utf-8");
        String requestURI = servletRequest.getRequestURI();
        log.info("拦截到请求{}",requestURI);
        String ipAddr = IpUtils.getIpAddr(servletRequest);
        System.out.println(ipAddr);
        HttpSession session = servletRequest.getSession();
        Long student =(Long) session.getAttribute("student");
        if(student==null){
            Long teacher =(Long) session.getAttribute("teacher");
            BaseContext.setCurrentId(teacher);
        }
        else {
            BaseContext.setCurrentId(student);
        }
        if(BaseContext.getCurrentId()==null){
            servletResponse.getWriter().write(JSON.toJSONString(R.error("还未登陆")));
            return;
        }
        chain.doFilter(request, response);
}
}
