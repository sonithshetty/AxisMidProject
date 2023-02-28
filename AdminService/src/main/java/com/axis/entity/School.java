package com.axis.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "School")
public class School {
	
	@Id
	private Long school_id;
	private Long totalMoneyEarned;
	private Long totalMoneySpent;
	private String schoolName;
	private String schoolAddr;
	public School() {
		super();
	}
	public School(Long school_id, Long totalMoneyEarned, Long totalMoneySpent, String schoolName, String schoolAddr) {
		super();
		this.school_id = school_id;
		this.totalMoneyEarned = totalMoneyEarned;
		this.totalMoneySpent = totalMoneySpent;
		this.schoolName = schoolName;
		this.schoolAddr = schoolAddr;
	}
	public Long getSchool_id() {
		return school_id;
	}
	public void setSchool_id(Long school_id) {
		this.school_id = school_id;
	}
	public Long getTotalMoneyEarned() {
		return totalMoneyEarned;
	}
	public void setTotalMoneyEarned(Long totalMoneyEarned) {
		this.totalMoneyEarned = totalMoneyEarned;
	}
	public Long getTotalMoneySpent() {
		return totalMoneySpent;
	}
	public void setTotalMoneySpent(Long totalMoneySpent) {
		this.totalMoneySpent = totalMoneySpent;
	}
	public String getSchoolName() {
		return schoolName;
	}
	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}
	public String getSchoolAddr() {
		return schoolAddr;
	}
	public void setSchoolAddr(String schoolAddr) {
		this.schoolAddr = schoolAddr;
	}
	@Override
	public String toString() {
		return "School [school_id=" + school_id + ", totalMoneyEarned=" + totalMoneyEarned + ", totalMoneySpent="
				+ totalMoneySpent + ", schoolName=" + schoolName + ", schoolAddr=" + schoolAddr + "]";
	}
	
}
