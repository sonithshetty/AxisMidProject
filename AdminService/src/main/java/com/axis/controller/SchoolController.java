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

    @GetMapping("/school/{id}")
    public ResponseEntity<School> getSchoolById(@PathVariable Long id) {
        School school = schoolService.getSchoolById(id);
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
    
    @PutMapping("/school/{id}")
    ResponseEntity<School> updateSchoolById(@PathVariable Long id, @RequestBody School school){
		return new ResponseEntity<School>(schoolService.updateSchoolById(id, school), HttpStatus.OK);
	}

    @DeleteMapping("/school/{id}")
    public ResponseEntity<Void> deleteSchoolById(@PathVariable Long id) {
        schoolService.deleteSchoolById(id);
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
    
    @GetMapping("/school/allTeachers/{school_id}")
    public List<Teacher> getAllTeacherBySchoolId(){
    	String sort = "school_id";
        String url = "http://StudentTeacher/teachers/{sort}";
        List<Teacher> teacherList = restTemplate.getForObject(url, List.class, sort);
        return teacherList;
    }
    
    @GetMapping("/school/allStudents/{school_id}")
    public List<Student> getAllStudentsBySchoolId(){
    	String url = "http://StudentTeacher/students/{school_id}";
    	List<Student> studentsList = restTemplate.getForObject(url, List.class);
    	return studentsList;    	
    }
}
