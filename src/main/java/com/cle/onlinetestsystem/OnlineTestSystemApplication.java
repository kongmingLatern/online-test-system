package com.cle.onlinetestsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
@ServletComponentScan
@EnableCaching
public class OnlineTestSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(OnlineTestSystemApplication.class, args);
    }

}
