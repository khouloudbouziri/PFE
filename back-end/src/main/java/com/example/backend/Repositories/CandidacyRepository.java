package com.example.backend.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.backend.entities.Candidacy;

@Repository
public interface CandidacyRepository extends JpaRepository<Candidacy, Long> {

    List<Candidacy> findByIdIntershipOffer(Long idIntershipOffer);

    List<Candidacy> findAllByIdIntern(Long idIntern);

    List<Candidacy> findAllByIdIntershipOffer(Long idIntershipOffer);

    @Query("SELECT c FROM Candidacy c WHERE c.idCandidacy IN ( SELECT DISTINCT c.idIntern FROM Candidacy c)")
    List<Candidacy> findAllDistinct();

}
