package com.example.backend.Repositories;

import java.util.Optional;

import org.hibernate.mapping.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.Supervisor;

@Repository
public interface IntershipOfferRepository extends JpaRepository<IntershipOffre, Long> {

   // List<IntershipOffre> findBySupervisor(String supervisor);
   // List<IntershipOffre> findBySupervisor(String supervisor);

}
