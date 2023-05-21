package com.example.backend.ServicesImplement;

import java.util.List;

import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.IntershipOffreHelper;

public interface IntershipOffreServiceImpl {

    public IntershipOffre addIntershipOffre(IntershipOffre IntershipOffre);

    public List<IntershipOffreHelper> getAllIntershipOffers();

    public IntershipOffreHelper getIntershipOfferById(Long id);

    public IntershipOffre updateIntershipOffer(IntershipOffre IntershipOffre);

    public void deleteIntershipById(Long id);

    public IntershipOffre addFavoriteOffer(Long idIntern, Long idIntershipOffer);

    public List<IntershipOffreHelper> getInternFavoriteOffers(Long idIntern);

}
