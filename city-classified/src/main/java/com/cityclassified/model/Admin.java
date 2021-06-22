package com.cityclassified.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

@Entity
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(unique = true)
	@NotNull
	private String adminName;

	@NotNull
	private String password;

	@OneToMany(mappedBy = "admin")
	@JsonIgnore // This property will not be present while serializing this class into JSON.
	private List<AdminClassified> adminClssifieds;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	@JsonIgnore // Does not show password in JSON when an object of this class is serialized.
	public String getPassword() {
		return password;
	}

	@JsonProperty // Allows to accept password when it is given as input through JSON.
	public void setPassword(String password) {
		this.password = password;
	}

	public List<AdminClassified> getAdminClssifieds() {
		return adminClssifieds;
	}

	public void setAdminClssifieds(List<AdminClassified> adminClssifieds) {
		this.adminClssifieds = adminClssifieds;
	}

}
