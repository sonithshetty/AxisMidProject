package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.axis.entity.School;
import com.axis.repository.SchoolRepository;
import org.springframework.stereotype.Service;

@Service
public class SchoolServiceImpl implements SchoolService{
	
	@Autowired
	SchoolRepository schoolRepository;

	@Override
	public School createSchool(School school) {
		// TODO Auto-generated method stub
		return schoolRepository.save(school);
	}

	@Override
	public School getSchoolById(Long id) {
		// TODO Auto-generated method stub
		return schoolRepository.findById(id).get();
	}

	@Override
	public List<School> getAllSchools() {
		// TODO Auto-generated method stub
		return schoolRepository.findAll();
	}

	@Override
	public School updateSchoolById(Long id, School school) {
		// TODO Auto-generated method stub
		return schoolRepository.save(school);
	}

	@Override
	public void deleteSchoolById(Long id) {
		// TODO Auto-generated method stub
		schoolRepository.deleteById(id);
	}

}
