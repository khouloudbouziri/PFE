package com.example.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Entity
public class FollowUp implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id_follow_up;
    private Intership intership;
    private Employee employee;
    private String note;

    public FollowUp() {
        super();
    }

   

    public long getId_follow_up() {
        return id_follow_up;
    }

    public void setId_follow_up(long id_follow_up) {
        this.id_follow_up = id_follow_up;
    }

    public Intership getIntership() {
        return intership;
    }

    public void setIntership(Intership intership) {
        this.intership = intership;
    }

   

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }



    public Employee getEmployee() {
        return employee;
    }



    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    



    

    

}
