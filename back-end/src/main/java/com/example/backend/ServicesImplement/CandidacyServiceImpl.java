package com.example.backend.ServicesImplement;

import java.util.List;
import java.util.Optional;

import com.example.backend.entities.Candidacy;
import com.example.backend.entities.CandidacyHelper;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.Visitor;

public interface CandidacyServiceImpl {

    public Candidacy addCandidacy(Candidacy candidacy, Long id_intershipOffer, Long id_intern);

    public List<IntershipOffre> getInternCandidacy(Long id_intern);

    public List<Visitor> getInterns(Long id_intershipOffer);

    public Candidacy spontaneousCandidacy(Candidacy candidacy);

    public Optional<Candidacy> getCandidacyById(Long idC);

    public void save(Candidacy c);

    public List<CandidacyHelper> getIntershipOfferCandidacies(Long id_offer);

    // public List<Candidacy> getCandidaciesBySupervisor(Long idSupervisor);
}
