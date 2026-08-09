package com.jayant.backend.service.serviceImp;

import com.jayant.backend.entity.Student;
import com.jayant.backend.repository.StudentRepo;
import com.jayant.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class studentServiceImp implements StudentService {

    private final StudentRepo studentRepo;
    @Override
    public List<Student> getStudents() {
        return studentRepo.findAll();
    }

    @Override
    public Student addStudent(Student student) {
        return studentRepo.save(student);
    }

    @Override
    public void deleteStudent(Long id) {
        studentRepo.deleteById(id);
    }
}
