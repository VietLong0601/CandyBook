package com.example.demo.controller;

import com.example.demo.dto.request.UserCreationRequest;
import com.example.demo.dto.request.UserUpdateRequest;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService  userService;
    @PostMapping
    User createUser(@RequestBody UserCreationRequest request){
       return userService.createUser(request);
    }
    @GetMapping
    List<User> getUsers(){
       return userService.getUsers();
    }
    @GetMapping("/{userId}")
    User getUserById(@PathVariable("userId") String id){
        return userService.getUserById(id);
    }
    @PutMapping("/{userId}")
    User updateUser(@RequestBody UserUpdateRequest request , @PathVariable String userId){
    return userService.updateUser(userId,request);
    }

    @DeleteMapping("/{userId}")
    String deleteUser(@PathVariable String userId){
        userService.deleteUser(userId);
        return "User has been deleted";
    }
}
