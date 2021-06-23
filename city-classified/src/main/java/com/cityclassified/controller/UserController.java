package com.cityclassified.controller;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cityclassified.model.User;
import com.cityclassified.repository.ClassifiedRepo;
import com.cityclassified.repository.UserRepo;

@Transactional // This is used in-order to delete the child classified first before deleting
				// the
				// parent user
@RestController
public class UserController {

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private ClassifiedRepo classifiedRepo;

	/**
	 * Gets all the users.
	 * 
	 * @return list of all the users
	 */
	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	/**
	 * To get all the usernames alone in-order to verify if a username is already
	 * present or not.
	 * 
	 * @return String list of all usernames
	 */
	@GetMapping("/users/usernames")
	public List<String> getAllUserNames() {
		return userRepo.findAllUserName();
	}

	/**
	 * To get a user by its userName.
	 * 
	 * @return a single user object having the given username
	 */
	@GetMapping("/users/{userName}")
	public Optional<User> getAUser(@PathVariable String userName) {
		return userRepo.findById(userName);
	}

	/**
	 * To get the password of a user by userName. This can be used to verify if the
	 * password matches the user_name.
	 * 
	 * @return String password
	 */
	@GetMapping("/users/password/{userName}")
	public List<String> getPassword(@PathVariable String userName) {
		return userRepo.findPasswordByUserName(userName);
	}

	/**
	 * To create a new user.
	 * 
	 * @return user object which is given as input
	 */
	@PostMapping("/users/user")
	public User addUser(@RequestBody User user) {
		userRepo.save(user);
		return user;
	}

	/**
	 * To update an old user.
	 * 
	 * @return user object which is given as input
	 */
	@PutMapping("/users/user")
	public User updateUser(@RequestBody User user) {
		userRepo.save(user);
		return user;
	}

	/**
	 * Deletes the user and all the classifieds posted by that user which has the
	 * given userName
	 * 
	 * @return 'DeletedSuccessfully' message
	 */
	@DeleteMapping("/users/{userName}")
	public String deleteUser(@PathVariable String userName) {
		classifiedRepo.deleteByUserUserName(userName);
		userRepo.deleteById(userName);
		return "DeletedSuccessfully";
	}

}
