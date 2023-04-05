package com.example.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Exceptions.VisitorNotFoundException;
import com.example.backend.Repositories.VisitorRepository;
import com.example.backend.ServicesImplement.VisitorServiceImp;
import com.example.backend.entities.Visitor;

@Service
public class VisitorService implements VisitorServiceImp {

    private final VisitorRepository visitorRepository;

    @Autowired
    public VisitorService(VisitorRepository visitorRepository) {
        super();
        this.visitorRepository = visitorRepository;
    }

    public Visitor findVisitorById(Long id) {
        return visitorRepository.findById(id)
                .orElseThrow(() -> new VisitorNotFoundException("Encadrant avec l'id" + id + "n'existe pas"));
    }

}
