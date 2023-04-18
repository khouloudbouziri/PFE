package com.example.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.entities.FileDB;

@Repository
public interface FileDBRepository  extends JpaRepository<FileDB,String> {
    
}
