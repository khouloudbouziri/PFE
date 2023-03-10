package com.example.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ToDoList implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTodo;
    private String tache;
    private boolean status;

    public ToDoList() {
    }

    public ToDoList(Long idTodo, String tache, boolean status) {
        this.idTodo = idTodo;
        this.tache = tache;
        this.status = status;
    }

    public Long getIdTodo() {
        return idTodo;
    }

    public void setIdTodo(Long idTodo) {
        this.idTodo = idTodo;
    }

    public String getTache() {
        return tache;
    }

    public void setTache(String tache) {
        this.tache = tache;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
    
    
    
    
}
    

