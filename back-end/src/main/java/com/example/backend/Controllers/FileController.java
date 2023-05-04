package com.example.backend.Controllers;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.Repositories.FileRepository;
import com.example.backend.Services.FileStorageService;
import com.example.backend.entities.FileEntity;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")
public class FileController {
    @Autowired
    private FileRepository fileRepository;

    @Autowired
    private FileStorageService fileStorageService;

    @PersistenceContext
    private EntityManager entityManager;

    @PostMapping("/uploadFile")
    public String uploadFile(@RequestParam("file") MultipartFile file) throws IOException, SQLException {

        String fileName = fileStorageService.storeFile(file);
        return fileName;
  
    }

    @GetMapping("/GetFile")
    public List<FileEntity> getFiles() {
       
       List< FileEntity> files=fileRepository.findAll();
       return files;
             
    }
}
