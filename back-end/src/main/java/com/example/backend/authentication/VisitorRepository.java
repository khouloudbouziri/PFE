package com.example.backend.authentication;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.entities.Visitor;

public interface VisitorRepository extends JpaRepository<Visitor, Long> {

    Optional<Visitor> findByEmail(String email);
}
