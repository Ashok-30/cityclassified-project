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
public class City {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(unique = true)
	@NotNull
	private String cityName;

	@OneToMany(mappedBy = "city")
	@JsonIgnore // This property will not be present while serializing this class into JSON.
	private List<User> users;

	@OneToMany(mappedBy = "city")
	@JsonIgnore // This property will not be present while serializing this class into JSON.
	private List<AdminClassified> adminClassifieds;

	@OneToMany(mappedBy = "city")
	@JsonIgnore // This property will not be present while serializing this class into JSON.
	private List<Classified> classifieds;

	@OneToMany(mappedBy = "city")
	@JsonIgnore // This property will not be present while serializing this class into JSON.
	private List<CityInfo> cityInfos;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public List<AdminClassified> getAdminClassifieds() {
		return adminClassifieds;
	}

	public void setAdminClassifieds(List<AdminClassified> adminClassifieds) {
		this.adminClassifieds = adminClassifieds;
	}

	public List<Classified> getClassifieds() {
		return classifieds;
	}

	public void setClassifieds(List<Classified> classifieds) {
		this.classifieds = classifieds;
	}

	public List<CityInfo> getCityInfos() {
		return cityInfos;
	}

	public void setCityInfos(List<CityInfo> cityInfos) {
		this.cityInfos = cityInfos;
	}

}
