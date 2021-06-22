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

import com.cityclassified.model.Admin;
import com.cityclassified.repository.AdminClassifiedRepo;
import com.cityclassified.repository.AdminRepo;

@Transactional // This is used in-order to delete the child classified first before deleting the
				// parent admin
@RestController
public class AdminController {

	@Autowired
	private AdminRepo adminRepo;

	@Autowired
	private AdminClassifiedRepo adminClassifiedRepo;

	/**
	 * Gets all the admin objects.
	 * 
	 * @return list of admin objects
	 */
	@GetMapping("/admins")
	public List<Admin> getAllAdmins() {
		return adminRepo.findAll();
	}

	/**
	 * Gets only the adminnames from the table inorder to verify if an admin_name
	 * already exist.
	 * 
	 * @return list of string adminnames
	 */
	@GetMapping("/admins/adminnames")
	public List<String> getAllAdminNames() {
		return adminRepo.findAllAdminName();
	}

	/**
	 * Gets admin by the given id.
	 * 
	 * @return a single admin if it has the given id
	 */
	@GetMapping("/admins/id/{adminId}")
	public Optional<Admin> getAnAdmin(@PathVariable Integer adminId) {
		return adminRepo.findById(adminId);
	}

	/**
	 * Get a single admin by admin_name.
	 * 
	 * @return admin having admin_name
	 */
	@GetMapping("/admins/{adminName}")
	public Optional<Admin> getAnAdminByAdminName(@PathVariable String adminName) {
		return adminRepo.findAllByAdminName(adminName);
	}

	/**
	 * Gets the password for a given admin_name. This can be used for password
	 * verification while login.
	 * 
	 * @return String password for the given admin_name
	 */
	@GetMapping("/admins/adminpassword/{adminName}")
	public List<String> getPassword(@PathVariable String adminName) {
		return adminRepo.findPasswordByAdminName(adminName);
	}

	/**
	 * To create a new admin.
	 * 
	 * @return admin object which is given as input
	 */
	@PostMapping("/admins/admin")
	public Admin addAdmin(@RequestBody Admin admin) {
		adminRepo.save(admin);
		return admin;
	}

	/**
	 * To update an old admin.
	 * 
	 * @return admin object which is given as input
	 */
	@PutMapping("/admins/admin")
	public Admin updateAdmin(@RequestBody Admin admin) {
		adminRepo.save(admin);
		return admin;
	}

	/**
	 * To delete an admin based on id.
	 * 
	 * @return String message 'DeletedSuccessfully'
	 */
	@DeleteMapping("/admins/{adminId}")
	public String deleteAdmin(@PathVariable Integer adminId) {
		adminClassifiedRepo.deleteByAdminId(adminId);
		adminRepo.deleteById(adminId);
		return "DeletedSuccessfully";
	}

}
