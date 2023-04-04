package com.example.backend.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Exceptions.IntershipOfferNotFoundException;
import com.example.backend.Repositories.IntershipOfferRepository;
import com.example.backend.ServicesImplement.IntershipOffreServiceImpl;
import com.example.backend.entities.IntershipOffre;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class IntershipOffreService implements IntershipOffreServiceImpl {

    @Autowired
    private IntershipOfferRepository intershipOfferRepository;

    @Autowired
    public IntershipOffreService(IntershipOfferRepository intershipOfferRepository) {
        super();
        this.intershipOfferRepository = intershipOfferRepository;
    }

    public IntershipOffre addIntershipOffre(IntershipOffre IntershipOffre) {
        return intershipOfferRepository.save(IntershipOffre);
    }

    public List<IntershipOffre> getAllIntershipOffers() {
        return intershipOfferRepository.findAll();

    }

    public IntershipOffre getIntershipOfferById(Long id) {
        return intershipOfferRepository.findById(id)
                .orElseThrow(() -> new IntershipOfferNotFoundException("User by id" + id + "was not found"));
    }

    public IntershipOffre updateIntershipOffer(IntershipOffre IntershipOffre) {
        return intershipOfferRepository.save(IntershipOffre);
    }

    public void deleteIntershipById(Long id) {
        intershipOfferRepository.deleteById(id);
    }

}
