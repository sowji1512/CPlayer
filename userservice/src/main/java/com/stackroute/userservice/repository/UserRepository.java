/**
 * 
 */
package com.stackroute.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.stackroute.userservice.model.User;

public interface UserRepository extends JpaRepository<User,String>{
	User findByUserIdAndPassword(String userId, String password);


}
