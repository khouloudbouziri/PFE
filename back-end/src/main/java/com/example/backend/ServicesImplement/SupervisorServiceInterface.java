package com.example.backend.ServicesImplement;

import java.util.List;

import com.example.backend.entities.Supervisor;

public interface SupervisorServiceInterface {
    List<Supervisor> getAllSupervisors();
    Supervisor findSupervisorById(Long id);
    Supervisor addSupervisor(Supervisor supervisor);
    Supervisor updateSupervisor(Supervisor supervisor);
    void deleteSupervisor(Long id);
}
