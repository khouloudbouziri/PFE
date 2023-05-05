package com.example.backend.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.entities.Supervisor;

@Repository
public interface SupervisorRepo extends JpaRepository<Supervisor, Long> {

    public Optional<Supervisor> findByEmail(String email);

    public Optional<Supervisor> findByFirstname(String firstname);

   Optional<List<Supervisor>> findAllByVisitor(long visitor);

}
