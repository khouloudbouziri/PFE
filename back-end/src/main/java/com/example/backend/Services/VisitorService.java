package com.example.backend.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Exceptions.VisitorNotFoundException;
import com.example.backend.Repositories.IntershipOfferRepository;
import com.example.backend.Repositories.SupervisorRepo;
import com.example.backend.Repositories.VisitorRepository;
import com.example.backend.ServicesImplement.VisitorServiceImp;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.Supervisor;
import com.example.backend.entities.Visitor;

@Service
public class VisitorService implements VisitorServiceImp {

    private final VisitorRepository visitorRepository;
    private final IntershipOfferRepository intershipOfferRepository;
    private final SupervisorRepo supervisorRepository;

    @Autowired
    public VisitorService(VisitorRepository visitorRepository, IntershipOfferRepository intershipOfferRepository,
            SupervisorRepo supervisorRepository) {
        super();
        this.visitorRepository = visitorRepository;
        this.intershipOfferRepository = intershipOfferRepository;
        this.supervisorRepository = supervisorRepository;
    }

    public Visitor findVisitorById(Long id) {
        return visitorRepository.findById(id)
                .orElseThrow(() -> new VisitorNotFoundException("Encadrant avec l'id" + id + "n'existe pas"));
    }

    public List<IntershipOffre> getIntershipOffers(Long id) {
        List<IntershipOffre> allIntershipOffers = intershipOfferRepository.findAll();
        Optional<List<Supervisor>> allSupervisors = supervisorRepository.findAllByVisitor(id);
        List<IntershipOffre> companyIntershipOffers = new ArrayList<>();
        allSupervisors.ifPresent(supervisors -> {
            for (IntershipOffre offer : allIntershipOffers) {
                for (Supervisor supervisor : supervisors) {
                    long l = Long.parseLong(offer.getSupervisor());
                    if (l == supervisor.getId()) {
                        companyIntershipOffers.add(offer);
                        break;
                    }
                }
            }
        });
        return companyIntershipOffers;
    }

    /*
     * public Optional<Visitor> getCompanyDeptByCompanyName(String text2) {
     * Optional<Visitor> v = visitorRepository.findByCompany_name(text2);
     * return v;
     * 
     * }
     */
}
