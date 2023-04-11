package com.example.backend.ServicesImplement;

import java.util.List;

import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.Supervisor;

public interface SupervisorServiceInterface {
    List<Supervisor> getAllSupervisors();

    Supervisor findSupervisorById(Long id);

    List<Supervisor> findSupervisorByIdCompany(Long visitor);

    List<IntershipOffre> getIntershipOffers(Long id);

    Supervisor updateSupervisor(Supervisor supervisor);

    void deleteSupervisor(Long id);
}
