package com.example.backend.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Repositories.CandidacyRepository;
import com.example.backend.Repositories.IntershipOfferRepository;
import com.example.backend.Repositories.VisitorRepository;
import com.example.backend.ServicesImplement.CandidacyServiceImpl;
import com.example.backend.entities.Candidacy;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.Visitor;

@Service
public class CandidacyService implements CandidacyServiceImpl {

    @Autowired
    private final CandidacyRepository candidacyRepository;
    private final VisitorRepository visitorRepository;
    private final IntershipOfferRepository intershipOfferRepository;

    @Autowired
    public CandidacyService(CandidacyRepository candidacyRepository, VisitorRepository visitorRepository,
            IntershipOfferRepository intershipOfferRepository) {
        super();
        this.candidacyRepository = candidacyRepository;
        this.visitorRepository = visitorRepository;
        this.intershipOfferRepository = intershipOfferRepository;
    }

    public Candidacy addCandidacy(Candidacy candidacy, Long id_intershipOffer, Long id_intern) {
        candidacy.setId_intershipOffer(id_intershipOffer);
        candidacy.setIdIntern(id_intern);
        return candidacyRepository.save(candidacy);
    }

    public Candidacy spontaneousCandidacy(Candidacy candidacy) {
        return candidacyRepository.save(candidacy);
    }

    public List<IntershipOffre> getInternCandidacy(Long id_intern) {
        List<Candidacy> allCandidacies = candidacyRepository.findAllByIdIntern(id_intern);

        Optional<Visitor> intern = visitorRepository.findById(id_intern);
        List<IntershipOffre> internCandidacies = new ArrayList<>();
        intern.ifPresent(i -> {
            for (Candidacy candidacy : allCandidacies) {
                Optional<IntershipOffre> allIntershipOffers = intershipOfferRepository
                        .findById(candidacy.getId_intershipOffer());
                allIntershipOffers.ifPresent(internCandidacies::add);
            }
        });
        return internCandidacies;
    }

    public List<Visitor> getInterns(Long id_intershipOffer) {
        List<Candidacy> allCandidacies = candidacyRepository.findAll();
        List<Visitor> allInterns = visitorRepository.findAll();
        Optional<IntershipOffre> offer = intershipOfferRepository.findById(id_intershipOffer);
        List<Visitor> interns = new ArrayList<>();
        offer.ifPresent(o -> {
            for (Candidacy candidacy : allCandidacies) {
                if (candidacy.getId_intershipOffer() == o.getId_intership_offre()) {
                    for (Visitor intern : allInterns) {
                        if (candidacy.getIdIntern() == intern.getId()) {
                            interns.add(intern);
                        }
                    }
                }
            }

        });
        return interns;
    }

}
