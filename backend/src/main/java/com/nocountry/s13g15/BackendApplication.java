package com.nocountry.s13g15;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.TimeZone;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

//	@PostConstruct
//	public void init(){
//		// Setting Spring Boot SetTimeZone
//		TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
//	}

}
