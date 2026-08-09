package com.jayant.backend.service;

import com.jayant.backend.entity.Student;

import java.util.List;

public interface StudentService {
    List<Student> getStudents();
    Student addStudent(Student student);
    void deleteStudent(Long id);
}
