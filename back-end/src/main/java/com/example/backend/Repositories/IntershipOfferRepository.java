package com.example.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.entities.IntershipOffre;

@Repository
public interface IntershipOfferRepository extends JpaRepository<IntershipOffre, Long> {

}
