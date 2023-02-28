package com.axis.controller;

import java.util.List;

import com.axis.entity.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.entity.School;
import com.axis.entity.Student;
import com.axis.service.SchoolService;
import org.springframework.web.client.RestTemplate;

@RestController
public class SchoolController {
	
	@Autowired
	SchoolService schoolService;

    @Autowired
    RestTemplate restTemplate;
	
	@PostMapping("/school")
    public ResponseEntity<School> createSchool(@RequestBody School school) {
        School createdSchool = schoolService.createSchool(school);
        return ResponseEntity.ok(createdSchool);
    }

    @GetMapping("/school/{school_id}")
    public ResponseEntity<School> getSchoolById(@PathVariable Long school_id) {
        School school = schoolService.getSchoolById(school_id);
        if (school == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(school);
    }

    @GetMapping("/school")
    public ResponseEntity<List<School>> getAllSchools() {
        List<School> schools = schoolService.getAllSchools();
        return ResponseEntity.ok(schools);
    }
    
    @PutMapping("/school/{school_id}")
    ResponseEntity<School> updateSchoolById(@PathVariable Long school_id, @RequestBody School school){
		return new ResponseEntity<School>(schoolService.updateSchoolById(school_id, school), HttpStatus.OK);
	}

    @DeleteMapping("/school/{school_id}")
    public ResponseEntity<Void> deleteSchoolById(@PathVariable Long school_id) {
        schoolService.deleteSchoolById(school_id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/school/teachers")
    public List<Teacher> getAllTeacher(){
        String url = "http://StudentTeacher/teachers";
        List<Teacher> teachersList = restTemplate.getForObject(url, List.class);
        return teachersList;
    }
    
    @GetMapping("/school/students")
    public List<Student> getAllStudents(){
    	String url = "http://StudentTeacher/students";
    	List<Student> studentsList = restTemplate.getForObject(url, List.class);
    	return studentsList;    	
    }
    
    @GetMapping("/school/allTeachers/{id}")
    public Teacher getAllTeacherBySchoolId(@PathVariable Long id){
        String url = "http://StudentTeacher/teachers/"+ id;
        Teacher teacherList = restTemplate.getForObject(url, Teacher.class);
        return teacherList;
    }
    
    @GetMapping("/school/allStudents/{id}")
    public Student getAllStudentsBySchoolId(@PathVariable Long id){
    	String url = "http://StudentTeacher/students/"+ id;
    	Student studentsList = restTemplate.getForObject(url, Student.class);
    	return studentsList;
    }
}
