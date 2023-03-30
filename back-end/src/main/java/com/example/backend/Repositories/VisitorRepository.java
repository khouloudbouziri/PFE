package com.example.backend.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.entities.Visitor;

@Repository
public interface VisitorRepository extends JpaRepository<Visitor, Long> {

  public  Optional<Visitor> findByEmail(String email);



}
