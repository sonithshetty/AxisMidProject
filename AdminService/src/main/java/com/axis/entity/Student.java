package com.axis.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Student")
public class Student {
	
	@Id
	private int id;
//	@Id
	private int school_id;
	private String name;
	private String email;
	private String password;
	private String std;
	private boolean feesPaid;
	private int feesTotal = 15000;
	private int fees;
	private int remainingFees;

	public Student() {
		super();
	}
	
	public Student(int id, int school_id, String name, String email, String password, String std,
                   boolean feesPaid, int feesTotal, int fees, int remainingFees) {
		super();
		this.id = id;
		this.school_id = school_id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.std = std;
		this.feesPaid = feesPaid;
		this.feesTotal = feesTotal;
		this.fees = fees;
		this.remainingFees = remainingFees;
	}

	public int getid() {
		return id;
	}

	public void setid(int id) {
		this.id = id;
	}

	public int getSchool_id() {
		return school_id;
	}


	public void setSchool_id(int school_id) {
		this.school_id = school_id;
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

	public String getStd() {
		return std;
	}

	public void setStd(String std) {
		this.std = std;
	}

	public String getName() {
		return name;
	}

	public boolean getFeesPaid() {
		return feesPaid;
	}

	public int getFeesTotal() {
		return feesTotal;
	}
		 
//	public void payFees(int fees) {
//		
//		if(feesTotal == fees) {
//			feesPaid = true;
//		    School.updateTotalMoneyEarned(fees);
//		}else {
//			feesPaid = true;
//			feesTotal = feesTotal - fees;
//			School.updateTotalMoneyEarned(feesTotal);
//		}
//	    
//	}
//	
//	public int getRemainingFees() {
//	    return feesTotal - fees;
//	}
	
	public int getRemainingFees() {
		return remainingFees;
	}

	public void setRemainingFees(int remainingFees) {
		if(remainingFees == 0) {
			System.out.println("Fees Fully Paid");
		}else {
			
			this.remainingFees = feesTotal - fees;
		}
	}

	public int getFees() {
		return fees;
	}

	public void setFees(int fees) {
		this.fees = fees;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", school_id=" + school_id + ", name=" + name + ", email=" + email
				+ ", password=" + password + ", std=" + std + ", feesPaid=" + feesPaid + ", feesTotal=" + feesTotal
				+ ", fees=" + fees + ", remainingFees=" + remainingFees + "]";
	}

	
}
