package com.cityclassified.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cityclassified.model.CityInfo;
import com.cityclassified.repository.CityInfoRepo;

@RestController
public class CityInfoController {

	@Autowired
	private CityInfoRepo cityInfoRepo;

	/**
	 * To get all the cityInfos.
	 * 
	 * @return list of all the city infos
	 */
	@GetMapping("/cityinfos")
	public List<CityInfo> getAllCityInfos() {
		return cityInfoRepo.findAll();
	}

	/**
	 * To get all the cityInfos of a city.
	 * 
	 * @return list of all the city infos for the given city
	 */
	@GetMapping("/cityinfos/city/{cityId}")
	public List<CityInfo> getAllCityInfosForCity(@PathVariable Integer cityId) {
		return cityInfoRepo.findAllByCityIdOrderByRatingDesc(cityId);
	}

	/**
	 * To get all the cityInfos belonging to a type.
	 * 
	 * @return list of all the city infos belonging to the given type
	 */
	@GetMapping("/cityinfos/type/{typeId}")
	public List<CityInfo> getAllCityInfosForType(@PathVariable Integer typeId) {
		return cityInfoRepo.findAllByInfoTypeId(typeId);
	}

	/**
	 * To get all the cityInfos of a particular city belonging to a certain type and
	 * also ranked by rating.
	 * 
	 * @return list of all the city infos of a certain type in the given city
	 */
	@GetMapping("/cityinfos/city,type/{cityId}/{typeId}")
	public List<CityInfo> getAllCityInfosForCityAndType(@PathVariable Integer cityId, @PathVariable Integer typeId) {
		return cityInfoRepo.findAllByCityIdAndInfoTypeIdOrderByRatingDesc(cityId, typeId);
	}

	/**
	 * To add a new cityInfo.
	 * 
	 * @return cityInfo object which is given as input
	 */
	@PostMapping("/cityinfos/cityinfo")
	public CityInfo addANewInfo(@RequestBody CityInfo cityInfo) {
		cityInfoRepo.save(cityInfo);
		return cityInfo;
	}

	/**
	 * To update an old cityInfo.
	 * 
	 * @return cityInfo object which is given as input
	 */
	@PutMapping("/cityinfos/cityinfo")
	public CityInfo updateAnInfo(@RequestBody CityInfo cityInfo) {
		cityInfoRepo.save(cityInfo);
		return cityInfo;
	}

	/**
	 * Used to delete a cityInfo based on infoId.
	 * 
	 * @return 'DeletedSuccessfully' message
	 */
	@DeleteMapping("/cityinfos/{infoId}")
	public String deleteAnInfo(@PathVariable Integer infoId) {
		cityInfoRepo.deleteById(infoId);
		return "DeletedSuccessfully";
	}

}
