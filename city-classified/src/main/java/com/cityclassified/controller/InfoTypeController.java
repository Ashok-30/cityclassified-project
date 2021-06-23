package com.cityclassified.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cityclassified.model.InfoType;
import com.cityclassified.repository.InfoTypeRepo;

@RestController
public class InfoTypeController {

	@Autowired
	private InfoTypeRepo infoTypeRepo;

	/**
	 * Gets all the infoTypes in from the table.
	 * 
	 * @return list of all infoType objects
	 */
	@GetMapping("/infotypes")
	public List<InfoType> getAllInfoTypes() {
		return infoTypeRepo.findAll();
	}

}
