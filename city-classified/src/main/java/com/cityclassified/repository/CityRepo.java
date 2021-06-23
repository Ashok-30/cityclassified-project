package com.cityclassified.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cityclassified.model.City;

public interface CityRepo extends JpaRepository<City, Integer> {

}
