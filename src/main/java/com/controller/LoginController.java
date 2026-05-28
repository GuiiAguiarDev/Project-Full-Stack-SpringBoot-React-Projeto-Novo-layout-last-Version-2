package com.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.User;

@RestController
@CrossOrigin("*")
public class LoginController {
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user){
		
		
		if(user.getLogin().equals("admin")&&user.getPassword().equals("123")) {
			return ResponseEntity.ok(user.getLogin());
		}
		
		return ResponseEntity.badRequest().body("login Invalid");
	}

}
