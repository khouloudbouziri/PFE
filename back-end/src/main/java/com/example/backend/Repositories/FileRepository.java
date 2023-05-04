package com.example.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.entities.FileEntity;

@Repository
public interface FileRepository extends JpaRepository<FileEntity, Long> {
}

