package com.stackroute.favouriteservice.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "player")
public class Player {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "player_id")
	private int id;

	@Column(name = "player_name")
	private String name;
	
	@Column(name = "player_fullname")
	private String fullName;
				
	@Column(name = "player_Pid")
	private int pid;
	
	@Column(name = "user_id")
	private String userId;
	
	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	

	

	public Player() {
		super();
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public Player(int id, String name, String fullName,int pid,
			String userId) {
		super();
		this.id = id;
		this.name = name;
		this.fullName = fullName;
		this.pid = pid;
		this.userId = userId;
	}
	
	

	@Override
	public String toString() {
		return "Player [id=" + id + ", name=" + name + ", fullName=" + fullName + ", playerId=" + pid + ", userId=" + userId + "]";
	}

	

}
