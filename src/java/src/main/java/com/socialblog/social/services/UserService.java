package com.socialblog.social.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.socialblog.social.dto.UserDTO;
import com.socialblog.social.entities.User;
import com.socialblog.social.repositories.UserRepository;
import com.socialblog.social.services.exception.ObjectNotFoundException;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(String id) {
        try {
            Optional<User> user = userRepository.findById(id);
            return user.get();
        } catch (RuntimeException e) {
            throw new ObjectNotFoundException("Objeto não encontrado");
        }
    }

    public User insertUser(User obj) {
        return userRepository.insert(obj);
    }

    public User fromDTO(UserDTO objDto) {
        return new User(objDto.getId(), objDto.getName(), objDto.getEmail());
    }

    public void deleteUser(String id) {
        findById(id);
        userRepository.deleteById(id);
    }

    public User updateUser(User objUser) {
        try {
            Optional<User> newObj = userRepository.findById(objUser.getId());
            updateData(newObj.get(), objUser);
            return userRepository.save(newObj.get());
        } catch (RuntimeException e) {
            throw new ObjectNotFoundException("Erro ao atualizar!");
        }
    }

    private void updateData(User newObj, User obj) {
        newObj.setName(obj.getName());
        newObj.setEmail(obj.getEmail());
    }
}
