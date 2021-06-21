package com.cityclassified.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cityclassified.model.InfoType;

public interface InfoTypeRepo extends JpaRepository<InfoType, Integer> {

}
