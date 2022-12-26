package com.school.school.students;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> list() {
        return studentRepository.findAll();
    }

    public void create(Student student) {
        studentRepository.save(student);
    }

    public void delete(long id) {
        if (studentRepository.existsById(id)) {
           
        }
    }

    public void editById(long id, Student editStudent) {

        if (id != editStudent.getId())
            throw new NullPointerException("Id dont equals.");
        if (studentRepository.existsById(id)){
            studentRepository.save(editStudent);
        } else {
            throw new NotFoundException("Student with id «" + id + "» not found");
        }
    }

}
