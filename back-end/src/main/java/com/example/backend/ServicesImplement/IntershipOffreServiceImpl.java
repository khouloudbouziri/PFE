package com.example.backend.ServicesImplement;

import java.util.List;

import com.example.backend.entities.IntershipOffre;

public interface IntershipOffreServiceImpl {

    public IntershipOffre addIntershipOffre(IntershipOffre IntershipOffre);

    public List<IntershipOffre> getAllIntershipOffers();

    public IntershipOffre getIntershipOfferById(Long id);

    public IntershipOffre updateIntershipOffer(IntershipOffre IntershipOffre);

    public void deleteIntershipById(Long id);

    public IntershipOffre addFavoriteOffer(Long idIntern, Long idIntershipOffer);

    public List<IntershipOffre> getInternFavoriteOffers(Long idIntern);

}
