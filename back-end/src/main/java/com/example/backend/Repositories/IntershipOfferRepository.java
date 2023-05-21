package com.example.backend.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.backend.entities.Supervisor;
import com.example.backend.entities.IntershipOffre;

@Repository
public interface IntershipOfferRepository extends JpaRepository<IntershipOffre, Long> {
 
   
   List<IntershipOffre> findBySupervisor(Long supervisor);

}
