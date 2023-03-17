package com.example.backend.authentication;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.backend.entities.Visitor;

@Repository
public interface VisitorRepository extends JpaRepository<Visitor, Long> {

  public  Optional<Visitor> findByEmail(String email);



}
