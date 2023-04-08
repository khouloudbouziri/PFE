package com.example.backend.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Exceptions.VisitorNotFoundException;
import com.example.backend.Repositories.SupervisorRepo;
import com.example.backend.ServicesImplement.SupervisorServiceInterface;
import com.example.backend.entities.Supervisor;

@Service
public class SupervisorService implements SupervisorServiceInterface {
    private final SupervisorRepo supervisorRepository;

    @Autowired
    public SupervisorService(SupervisorRepo supervisorRepository) {
        this.supervisorRepository = supervisorRepository;
    }

    public List<Supervisor> getAllSupervisors() {
        return supervisorRepository.findAll();
    }

    public Supervisor findSupervisorById(Long id) {
        return supervisorRepository.findById(id)
                .orElseThrow(() -> new VisitorNotFoundException("Encadrant avec l'id" + id + "n'existe pas"));
    }

    public List<Supervisor> findSupervisorByIdCompany(Long id) {
        return supervisorRepository.findAllByVisitor(id)
                .orElseThrow(() -> new VisitorNotFoundException("Encadrant avec l'id" + id + "n'existe pas"));
    }

    public Supervisor updateSupervisor(Supervisor supervisor) {
        return supervisorRepository.save(supervisor);
    }

    public void deleteSupervisor(Long id) {
        supervisorRepository.deleteById(id);
    }

}
