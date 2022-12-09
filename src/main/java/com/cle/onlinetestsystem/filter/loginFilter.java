package com.cle.onlinetestsystem.filter;

import com.alibaba.fastjson2.JSON;
import com.cle.onlinetestsystem.Utils.IpUtils;
import com.cle.onlinetestsystem.common.BaseContext;
import com.cle.onlinetestsystem.pojo.R;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.AntPathMatcher;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter(filterName = "loginFilter",urlPatterns = "/*")
@Slf4j
public class loginFilter implements Filter {
    //路径匹配器，支持通配符
    public static final AntPathMatcher PATH_MATCHER = new AntPathMatcher();
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest servletRequest = (HttpServletRequest) request;
        HttpServletResponse servletResponse = (HttpServletResponse) response;
        String requestURI = servletRequest.getRequestURI();
        log.info("拦截到请求{}",requestURI);
        String[] urls = new String[]{
                "/login"
        };
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
        if(check(urls,requestURI)){
            chain.doFilter(request, response);
            return;
        }

//        log.info(BaseContext.getCurrentId().toString());

//        判断是否已经登录
        if(BaseContext.getCurrentId()==null){
            servletResponse.getWriter().write(JSON.toJSONString(R.error("No Login!!!")));
            return;
        }
        chain.doFilter(request, response);
}

    public boolean check(String[] urls, String requestURI) {
        for (String url : urls) {
            boolean match = PATH_MATCHER.match(url, requestURI);
            if (match) {
                return true;
            }
        }
        return false;
    }
}
