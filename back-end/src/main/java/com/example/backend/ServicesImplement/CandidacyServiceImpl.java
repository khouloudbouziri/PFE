package com.example.backend.ServicesImplement;

import java.util.List;

import com.example.backend.entities.Candidacy;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.Visitor;

public interface CandidacyServiceImpl {

    public Candidacy addCandidacy(Candidacy candidacy, Long id_intershipOffer, Long id_intern);

    public List<IntershipOffre> getInternCandidacy(Long id_intern);

    public List<Visitor> getInterns(Long id_intershipOffer);

    public Candidacy spontaneousCandidacy(Candidacy candidacy);
}