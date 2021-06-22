package com.cityclassified.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cityclassified.model.User;

public interface UserRepo extends JpaRepository<User, String> {

	@Query("Select userName from User")
	List<String> findAllUserName();

	@Query("Select password from User where userName=?1")
	List<String> findPasswordByUserName(String userName);

}
