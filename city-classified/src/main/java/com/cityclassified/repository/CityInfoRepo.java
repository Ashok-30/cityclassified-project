package com.cityclassified.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cityclassified.model.CityInfo;

public interface CityInfoRepo extends JpaRepository<CityInfo, Integer> {

	List<CityInfo> findAllByCityId(Integer cityId);

	List<CityInfo> findAllByInfoTypeId(Integer typeId);
	
	List<CityInfo> findAllByCityIdAndInfoTypeId(Integer cityId, Integer typeId);

	List<CityInfo> findAllByCityIdAndInfoTypeIdOrderByRatingDesc(Integer cityId, Integer typeId);

	List<CityInfo> findAllByCityIdOrderByRatingDesc(Integer cityId);

}
