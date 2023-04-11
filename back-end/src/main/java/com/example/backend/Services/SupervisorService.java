package com.example.backend.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Exceptions.VisitorNotFoundException;
import com.example.backend.Repositories.IntershipOfferRepository;
import com.example.backend.Repositories.SupervisorRepo;
import com.example.backend.ServicesImplement.SupervisorServiceInterface;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.Supervisor;

@Service
public class SupervisorService implements SupervisorServiceInterface {
    private final SupervisorRepo supervisorRepository;
    private final IntershipOfferRepository intershipOfferRepository;

    @Autowired
    public SupervisorService(SupervisorRepo supervisorRepository, IntershipOfferRepository intershipOfferRepository) {
        this.supervisorRepository = supervisorRepository;
        this.intershipOfferRepository = intershipOfferRepository;
    }

    public List<Supervisor> getAllSupervisors() {
        return supervisorRepository.findAll();
    }

    public Supervisor findSupervisorById(Long id) {
        return supervisorRepository.findById(id)
                .orElseThrow(() -> new VisitorNotFoundException("Encadrant avec l'id" + id + "n'existe pas"));
    }

    public List<IntershipOffre> getIntershipOffers(Long id) {
        List<IntershipOffre> allIntershipOffers = intershipOfferRepository.findAll();
        Optional<Supervisor> supervisor = supervisorRepository.findById(id);
        List<IntershipOffre> supervisorOffers = new ArrayList<>();
        supervisor.ifPresent(s -> {
            for (IntershipOffre offer : allIntershipOffers) {
                long l = Long.parseLong(offer.getSupervisor());
                if (l == s.getId()) {
                    supervisorOffers.add(offer);
                }
            }
        });
        return supervisorOffers;
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
