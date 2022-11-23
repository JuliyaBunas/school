package com.school.school.students;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.IntStream;

public class StudentsStorage {
    private static List<Student> data = new ArrayList<>();
    public static void create (Student student) {
        if (student.getId() == null) {
            student.generateId();
        }
        data.add(student);
    }
    public static List<Student> getAll(){
        return data;
    }
    public static Student getById (UUID id){
        return data.stream()
                .filter((s) -> s.getId().equals(id))
                .findFirst()
                .orElseThrow();
    }
    public static void update (UUID id, Student student){
        if (!id.equals(student.getId())){
            throw new RuntimeException("Selected id not equals student body id");
        }
        data.set(getIndexById(id), student);
    }
    public static void delete (UUID id){
        data.remove(getIndexById(id));
    }
    private static int getIndexById (UUID id){
        return IntStream.range(0, data.size())
                .filter(i -> id.equals(data.get(i).getId()))
                .findFirst()
                .orElseThrow();
    }


}
