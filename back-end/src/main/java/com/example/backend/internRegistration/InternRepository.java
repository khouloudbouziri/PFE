package com.example.backend.internRegistration;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.entities.Intern;

public interface InternRepository extends JpaRepository<Intern,Long> {
    
    Optional<Intern> findByemail( String email);

}
