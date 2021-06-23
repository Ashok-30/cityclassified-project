package com.cityclassified.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cityclassified.model.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer> {

	@Query("Select adminName from Admin")
	List<String> findAllAdminName();

	@Query("Select password from Admin where adminName=?1")
	List<String> findPasswordByAdminName(String userName);

	Optional<Admin> findAllByAdminName(String adminName);

}
