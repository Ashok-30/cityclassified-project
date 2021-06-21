package com.cityclassified.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cityclassified.model.City;
import com.cityclassified.repository.CityRepo;

@RestController
public class CityController {

	@Autowired
	private CityRepo cityRepo;

	/**
	 * To get all the city objects.
	 * 
	 * @return list of city
	 */
	@GetMapping("/cities")
	public List<City> getAllCities() {
		return cityRepo.findAll();
	}

}
