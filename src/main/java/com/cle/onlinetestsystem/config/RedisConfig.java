package com.cle.onlinetestsystem.config;

import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

@Configuration
public class RedisConfig extends CachingConfigurerSupport {
    @Bean
        public RedisTemplate<String, String> redisTemplate (RedisConnectionFactory factory){
            RedisTemplate<String, String> redisTemplate = new RedisTemplate<>();
            RedisSerializer<String> redisSerializer = new StringRedisSerializer();
            redisTemplate.setConnectionFactory(factory);

            // key序列化
            redisTemplate.setKeySerializer(redisSerializer);
            // value序列化
            redisTemplate.setValueSerializer(new Jackson2JsonRedisSerializer<>(Object.class));
            // key hashmap序列化
            redisTemplate.setHashKeySerializer(new Jackson2JsonRedisSerializer<>(Object.class));
            // value hashmap序列化
            redisTemplate.setHashValueSerializer(new Jackson2JsonRedisSerializer<>(Object.class));
            return redisTemplate;
    }
}
