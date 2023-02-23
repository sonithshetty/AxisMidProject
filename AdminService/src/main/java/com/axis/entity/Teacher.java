package com.axis.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Teacher")
public class Teacher {
	
	private Long id;
	@Id
	private Long school_id;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private Long salaryEarned;
	
	public Teacher() {
		
	}
	
	public Long getid() {
		return id;
	}

	public void setid(Long id) {
		this.id = id;
	}
	
	public Long getSchool_id() {
		return school_id;
	}

	public void setSchool_id(Long school_id) {
		this.school_id = school_id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
		
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
//	public void recieveSalary(int salary) {
//	    salaryEarned = +salary;
//	    School.updateTotalMoneySpent(salary);
//	  }
	
	public Long getSalaryEarned() {
		return salaryEarned;
	}

	public void setSalaryEarned(Long salaryEarned) {
		this.salaryEarned = salaryEarned;
	}

	

	public Teacher(Long id, Long school_id, String firstName, String lastName, String email, String password,
                   Long salaryEarned) {
		super();
		this.id = id;
		this.school_id = school_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.salaryEarned = salaryEarned;
	}

	@Override
	public String toString() {
		return "Teacher [id=" + id + ", school_id=" + school_id + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", email=" + email + ", password=" + password + ", salaryEarned="
				+ salaryEarned + "]";
	}		
}
