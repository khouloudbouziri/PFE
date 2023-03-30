package com.example.backend.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.entities.Supervisor;
import com.example.backend.entities.Visitor;

@Repository
public interface SupervisorRepo  extends JpaRepository<Supervisor, Long>{

    List<Supervisor> findAll();

    Optional<Supervisor> findById(Long id);

    Supervisor save(Supervisor supervisor);

    void deleteById(Long id);

    Optional<Visitor> findByEmail(String email);
    
}
