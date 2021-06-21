package com.cityclassified.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cityclassified.model.Classified;

public interface ClassifiedRepo extends JpaRepository<Classified, Integer>{

	List<Classified> findAllByCityId(Integer cityId);

	List<Classified> findAllByUserUserName(String userName);

	void deleteByUserUserName(String userName);

	List<Classified> findAllByCategoryContainingIgnoreCase(String category);


}
