package com.example.backend.entities;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity
public class Intern extends Visitor {

    private University university;
    private ToDoList toDoList;
    private String test;

    public Intern() {
        super();
    }

    public Intern(long id, String firstname, String lastname, String adress, String phone_number, String email,
            String password, String photo_url, University university, com.example.backend.entities.ToDoList toDoList, String test) {
        super(id, firstname, lastname, adress, phone_number, email, password, photo_url);
        this.university = university;
        this.toDoList = toDoList;
        this.test=test;
        super.firstname="firstname";
        super.lastname="lastname";
    }

    public University getUniversity() {
        return university;
    }

    public void setUniversity(University university) {
        this.university = university;
    }

    public ToDoList getToDoList() {
        return toDoList;
    }

    public void setToDoList(ToDoList toDoList) {
        this.toDoList = toDoList;
    }

    public String getFirstName() {
        return super.getFirstname();
    }

}
