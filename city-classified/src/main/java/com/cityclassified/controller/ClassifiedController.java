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

import com.cityclassified.model.Classified;
import com.cityclassified.repository.ClassifiedRepo;

@RestController
public class ClassifiedController {

	@Autowired
	private ClassifiedRepo classifiedRepo;

	/**
	 * Gets all the classifieds from the table.
	 * 
	 * @return list of all classifieds
	 */
	@GetMapping("/classifieds")
	public List<Classified> getAllClassifieds() {
		return classifiedRepo.findAll();
	}

	/**
	 * Gets the classified belonging to the given id.
	 * 
	 * @return classified object if it has the given id
	 */
	@GetMapping("/classifieds/{classifiedId}")
	public Optional<Classified> getClassifiedById(@PathVariable Integer classifiedId) {
		return classifiedRepo.findById(classifiedId);
	}

	/**
	 * To get all the classifieds in a given city.
	 * 
	 * @return list of classifieds which belong to the given city
	 */
	@GetMapping("/classifieds/city/{cityId}")
	public List<Classified> getAllClassifiedsByCity(@PathVariable Integer cityId) {
		return classifiedRepo.findAllByCityId(cityId);
	}

	/**
	 * To get all the classifieds posted by a particular user.
	 * 
	 * @return list of all classifieds posted by the given user
	 */
	@GetMapping("/classifieds/user/{userName}")
	public List<Classified> getAllClassifiedsByUser(@PathVariable String userName) {
		return classifiedRepo.findAllByUserUserName(userName);
	}

	/**
	 * To get all the classifieds of a certain category.
	 * 
	 * @return list of all classifieds of the given category
	 */
	@GetMapping("/classifieds/category/{category}")
	public List<Classified> getAllClassfiedsByCategory(@PathVariable String category) {
		return classifiedRepo.findAllByCategoryContainingIgnoreCase(category);
	}

	/**
	 * To create a new classified.
	 * 
	 * @return classified object which is given as input
	 */
	@PostMapping("/classifieds/classified")
	public Classified addClassified(@RequestBody Classified classified) {
		classifiedRepo.save(classified);
		return classified;
	}

	/**
	 * To update an old classified.
	 * 
	 * @return classified object which is given as input
	 */
	@PutMapping("/classifieds/classified")
	public Classified updateClassified(@RequestBody Classified classified) {
		classifiedRepo.save(classified);
		return classified;
	}

	/**
	 * To delete a classified by given classifiedId.
	 * 
	 * @return 'DeletedSuccessfully' message
	 */
	@DeleteMapping("/classifieds/classified/{classifiedId}")
	public String deleteClassified(@PathVariable Integer classifiedId) {
		classifiedRepo.deleteById(classifiedId);
		return "DeletedSuccessfully";
	}

}
