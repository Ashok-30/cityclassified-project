package com.cityclassified.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cityclassified.model.AdminClassified;

public interface AdminClassifiedRepo extends JpaRepository<AdminClassified, Integer> {

	List<AdminClassified> findAllByCityId(Integer cityId);

	List<AdminClassified> findAllByAdminId(Integer adminId);

	List<AdminClassified> findAllByCategoryContainingIgnoreCase(String category);

	void deleteByAdminId(Integer adminId);

}
