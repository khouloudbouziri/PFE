package com.example.backend.ServicesImplement;

import java.util.List;
import java.util.Optional;

import com.example.backend.entities.Candidacy;
import com.example.backend.entities.CandidacyHelper;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.IntershipOffreHelper;
import com.example.backend.entities.Visitor;

public interface CandidacyServiceImpl {

    public Candidacy addCandidacy(Candidacy candidacy, Long id_intershipOffer, Long id_intern);

    public List<IntershipOffreHelper> getInternCandidacy(Long id_intern);

    public List<Visitor> getInterns(Long id_intershipOffer);

    public Candidacy spontaneousCandidacy(Candidacy candidacy);

    public CandidacyHelper getCandidacyById(Long idC);

    public void save(Candidacy c);

    public List<CandidacyHelper> getIntershipOfferCandidacies(Long id_offer);

    public List<Candidacy> getCandidaciesBySupervisor(Long idSupervisor);

    public List<Candidacy> getCandidaciesBySupervisorAndStatus(Long idSupervisor);

    public Optional<Candidacy> changeCandidacyState(Long idCandidacy);

    public List<CandidacyHelper> getAll();

    public void deleteCandidacy(Long idCandidacy);
}
