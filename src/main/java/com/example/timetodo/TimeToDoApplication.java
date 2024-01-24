package com.example.timetodo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

//@EnableJpaAuditing
@SpringBootApplication
public class TimeToDoApplication {

    public static void main(String[] args) {
        SpringApplication.run(TimeToDoApplication.class, args);
    }

}
