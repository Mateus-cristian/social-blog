package com.socialblog.social.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.socialblog.social.entities.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findByUsernameAndPassword(String username, String password);

}
