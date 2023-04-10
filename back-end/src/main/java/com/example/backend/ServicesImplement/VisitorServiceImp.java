package com.example.backend.ServicesImplement;

import java.util.List;

import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.Visitor;

public interface VisitorServiceImp {

    Visitor findVisitorById(Long id);

    List<IntershipOffre> getIntershipOffers(Long id);

}
