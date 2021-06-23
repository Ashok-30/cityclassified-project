package com.cityclassified.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

@Entity
public class InfoType {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotNull
	@Column(unique = true)
	private String infoType;

	@OneToMany(mappedBy = "infoType")
	@JsonIgnore // This property will not be present while serializing this class into JSON.
	private List<CityInfo> cityInfos;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getInfoType() {
		return infoType;
	}

	public void setInfoType(String infoType) {
		this.infoType = infoType;
	}

	public List<CityInfo> getCityInfos() {
		return cityInfos;
	}

	public void setCityInfos(List<CityInfo> cityInfos) {
		this.cityInfos = cityInfos;
	}

}
