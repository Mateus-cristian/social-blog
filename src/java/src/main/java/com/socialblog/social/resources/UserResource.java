package com.socialblog.social.resources;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.socialblog.social.dto.UserDTO;
import com.socialblog.social.entities.JwtUtils;
import com.socialblog.social.entities.User;
import com.socialblog.social.entities.UserLoginRequest;
import com.socialblog.social.services.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/users")
public class UserResource {

    @Autowired
    UserService userService;

    @Autowired
    private final JwtUtils jwtUtils = null;

    // the blank field jwtUtils may not have been initialized
    @GetMapping
    public ResponseEntity<List<UserDTO>> findAll() {
        List<User> list = userService.findAll();
        List<UserDTO> listDto = list.stream().map(x -> new UserDTO(x.getId(), x.getUsername(), x.getImagePath()))
                .collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @GetMapping(value = "/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<UserDTO> findById(@PathVariable String id) {
        User user = userService.findById(id);
        if (user != null) {
            UserDTO userDTO = new UserDTO(user.getId(), user.getUsername(), user.getImagePath());
            return new ResponseEntity<>(userDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<UserDTO> findUserByNameAndPassword(@RequestBody UserLoginRequest request) {
        User user = userService.findUserByNameAndPassword(request.getUsername(), request.getPassword());
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        UserDTO userDTO = new UserDTO(user.getId(), user.getUsername(), user.getImagePath());
        String token = jwtUtils.generateToken(user.getId());
        userDTO.setToken(token);
        return ResponseEntity.ok().body(userDTO);
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> createUser(
            @RequestParam("username") String username,
            @RequestParam("password") String password,
            @RequestParam("image") MultipartFile image) {
        try {
            User user = userService.createUser(username, password, image);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (Error e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> updateUser(@RequestBody UserDTO userDto, @PathVariable String id) {
        User obj = userService.fromDTO(userDto);
        obj.setId(id);
        obj = userService.updateUser(obj);

        return ResponseEntity.noContent().build();
    }

}
