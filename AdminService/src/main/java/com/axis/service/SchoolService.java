package com.axis.service;

import java.util.List;

import com.axis.entity.School;

public interface SchoolService {
	School createSchool(School school);
    School getSchoolById(Long id);
    List<School> getAllSchools();
	School updateSchoolById(Long id, School school);
    void deleteSchoolById(Long id);
}
