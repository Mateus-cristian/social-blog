package com.socialblog.social.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.socialblog.social.dto.UserDTO;
import com.socialblog.social.entities.User;
import com.socialblog.social.repositories.UserRepository;
import com.socialblog.social.services.exception.ObjectNotFoundException;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

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

    public User findUserByNameAndPassword(String name, String password) {
        return userRepository.findByUsernameAndPassword(name, password);
    }

    public User createUser(String name, String password, MultipartFile image) {
        String imagePath = null;
        if (!image.isEmpty()) {
            try {
                imagePath = saveImage(image);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        User user = new User(null, name, password, imagePath);
        return userRepository.insert(user);
    }

    private String saveImage(MultipartFile image) throws IOException {
        String filename = StringUtils.cleanPath(image.getOriginalFilename());
        File file = new File("src/java/src/main/resources/images/" + filename);
        Files.write(file.toPath(), image.getBytes());
        return filename;
    }

    public User fromDTO(UserDTO objDto) {
        return new User(null, objDto.getId(), objDto.getUsername(), objDto.getPassword());
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
        newObj.setUsername(obj.getUsername());
    }
}
