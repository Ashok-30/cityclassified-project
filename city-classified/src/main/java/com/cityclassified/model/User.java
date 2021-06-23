package com.cityclassified.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

@Entity
public class User {

	@Id
	private String userName;

	@NotNull
	private String firstname;

	@NotNull
	private String lastname;

	@NotNull
	private Date dateOfBirth;

	@NotNull
	private String phoneNumber;

	@NotNull
	private String password;

	@ManyToOne
	private City city;

	@OneToMany(mappedBy = "user")
	@JsonIgnore // This property will not be present while serializing this class into JSON.
	private List<Classified> classifieds;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	@JsonIgnore // Does not show password in JSON when an object of this class is serialized.
	public String getPassword() {
		return password;
	}

	@JsonProperty // Allows to accept password when it is given as input through JSON.
	public void setPassword(String password) {
		this.password = password;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public List<Classified> getClassifieds() {
		return classifieds;
	}

	public void setClassifieds(List<Classified> classifieds) {
		this.classifieds = classifieds;
	}

}
