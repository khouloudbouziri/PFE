package com.example.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.ServicesImplement.SupervisorServiceInterface;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.Supervisor;
import com.example.backend.entities.SupervisorHelper;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/auth/supervisor")
public class SupervisorController {

    private final SupervisorServiceInterface supervisorService;

    @Autowired
    public SupervisorController(SupervisorServiceInterface supervisorService) {
        super();
        this.supervisorService = supervisorService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Supervisor>> getAllSupervisor() {
        List<Supervisor> supervisors = supervisorService.getAllSupervisors();
        return new ResponseEntity<>(supervisors, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Supervisor> getSupervisorById(@PathVariable("id") Long id) {
        Supervisor supervisor = supervisorService.findSupervisorById(id);
        return new ResponseEntity<>(supervisor, HttpStatus.OK);
    }

    @GetMapping("/find/bySupervisor/{id}")
    public ResponseEntity<List<SupervisorHelper>> findSupervisorByIdCompany(@PathVariable("id") Long id) {
        List<SupervisorHelper> supervisors = supervisorService.findSupervisorByIdCompany(id);
        return new ResponseEntity<>(supervisors, HttpStatus.OK);
    }

    @GetMapping("/find/offer/{id}")
    public ResponseEntity<List<IntershipOffre>> getIntershipOffers(@PathVariable("id") Long id) {
        List<IntershipOffre> supervisorOffers = supervisorService.getIntershipOffers(id);
        return new ResponseEntity<>(supervisorOffers, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Supervisor> updateSupervisor(@RequestBody Supervisor supervisor) {
        Supervisor updatedSupervisor = supervisorService.updateSupervisor(supervisor);
        return new ResponseEntity<>(updatedSupervisor, HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteSupervisorById(@RequestParam Long idSupervisor) {
        supervisorService.deleteSupervisor(idSupervisor);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
