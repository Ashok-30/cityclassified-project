package com.cityclassified.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cityclassified.model.AdminClassified;
import com.cityclassified.repository.AdminClassifiedRepo;

@RestController
public class AdminClassifiedController {

	@Autowired
	private AdminClassifiedRepo adminClassifiedRepo;

	/**
	 * Used to get all of the classifieds posted by admin.
	 * 
	 * @return list of all admin classifieds
	 */
	@GetMapping("/adminclassifieds")
	public List<AdminClassified> getAllAdminClassifieds() {
		return adminClassifiedRepo.findAll();
	}

	/**
	 * Used to get an admin classified by its id.
	 * 
	 * @return one classified for the given id
	 */
	@GetMapping("/adminclassifieds/{adminclassifiedId}")
	public Optional<AdminClassified> getAdminClassifiedById(@PathVariable Integer adminclassifiedId) {
		return adminClassifiedRepo.findById(adminclassifiedId);
	}

	/**
	 * Used to get all the admin classifieds for a particular city.
	 * 
	 * @return list of admin classifieds for the given city
	 */
	@GetMapping("/adminclassifieds/city/{cityId}")
	public List<AdminClassified> getAllAdminClassifiedsByCity(@PathVariable Integer cityId) {
		return adminClassifiedRepo.findAllByCityId(cityId);
	}

	/**
	 * Used to get all the classifieds posted by a particular admin.
	 * 
	 * @return list of classifieds posted by the given admin
	 */
	@GetMapping("/adminclassifieds/admin/{adminId}")
	public List<AdminClassified> getAllClassifiedsByAdminId(@PathVariable Integer adminId) {
		return adminClassifiedRepo.findAllByAdminId(adminId);
	}

	/**
	 * Used to get all the admin classifieds by a particular category.
	 * 
	 * @return list of admin classifieds belonging to the given category
	 */
	@GetMapping("/adminclassifieds/category/{category}")
	public List<AdminClassified> getAllAdminClassfiedsByCategory(@PathVariable String category) {
		return adminClassifiedRepo.findAllByCategoryContainingIgnoreCase(category);
	}

	/**
	 * Admin can post a new classified using this method.
	 * 
	 * @return adminClassified object which is given as input
	 */
	@PostMapping("/adminclassifieds/adminclassified")
	public AdminClassified addAdminClassified(@RequestBody AdminClassified adminClassified) {
		adminClassifiedRepo.save(adminClassified);
		return adminClassified;
	}

	/**
	 * Admin can update an old classified by using this method.
	 * 
	 * @return adminClassified object which is given as input
	 */
	@PutMapping("/adminclassifieds/adminclassified")
	public AdminClassified updateAdminClassified(@RequestBody AdminClassified adminClassified) {
		adminClassifiedRepo.save(adminClassified);
		return adminClassified;
	}

	/**
	 * The classified having the given id will be deleted.
	 * 
	 * @return 'DeletedSuccessfully' message
	 */
	@DeleteMapping("/adminclassifieds/adminclassified/{adminClassifiedId}")
	public String deleteAdminClassified(@PathVariable Integer adminClassifiedId) {
		adminClassifiedRepo.deleteById(adminClassifiedId);
		return "DeletedSuccessfully";
	}

}
