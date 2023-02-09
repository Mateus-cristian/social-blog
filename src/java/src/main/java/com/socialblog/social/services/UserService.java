package com.socialblog.social.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.socialblog.social.entities.User;
import com.socialblog.social.repositories.UserRepository;
import com.socialblog.social.services.exception.ObjectNotFoundException;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public User findById(String id){
        try{
            Optional<User> user = userRepository.findById(id);

            return user.get();
        }catch(RuntimeException e){
            throw new ObjectNotFoundException("Objeto não encontrado");
        }
    }
    
}
