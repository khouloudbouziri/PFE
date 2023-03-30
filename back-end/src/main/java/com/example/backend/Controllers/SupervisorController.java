package com.example.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.backend.ServicesImplement.SupervisorServiceInterface;
import com.example.backend.entities.Supervisor;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/supervisor")
public class SupervisorController {

    private final SupervisorServiceInterface supervisorService;

    @Autowired
    public SupervisorController(SupervisorServiceInterface supervisorService) {
        super();
        this.supervisorService = supervisorService;
    }

    @GetMapping ("/all")
    public ResponseEntity<List<Supervisor>> getAllSupervisor() {
        List<Supervisor> supervisors = supervisorService.getAllSupervisors();
        return new ResponseEntity<>(supervisors, HttpStatus.OK);
    }

    @GetMapping ("/find/{id}")
    public ResponseEntity<Supervisor> getSupervisorById(@PathVariable("id") Long id) {
        Supervisor supervisor = supervisorService.findSupervisorById(id);
        return new ResponseEntity<>(supervisor, HttpStatus.OK);
    }

    @PostMapping ("/add")
    public ResponseEntity<Supervisor> addSupervisor(@RequestBody Supervisor supervisor) {
        Supervisor newSupervisor = supervisorService.addSupervisor(supervisor);
        return new ResponseEntity<>(newSupervisor, HttpStatus.CREATED);
    }

    @PutMapping ("/update")
    public ResponseEntity<Supervisor> updateSupervisor(@RequestBody Supervisor supervisor) {
        Supervisor updatedSupervisor = supervisorService.updateSupervisor(supervisor);
        return new ResponseEntity<>(updatedSupervisor, HttpStatus.OK);
    }

    @DeleteMapping ("/delete/{id}")
    public ResponseEntity<?> deleteSupervisorById(@PathVariable("id") Long id) {
        supervisorService.deleteSupervisor(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
