package com.example.backend.Services;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Controllers.intershipOffreController;
import com.example.backend.Exceptions.IntershipOfferNotFoundException;
import com.example.backend.Repositories.ImageRepository;
import com.example.backend.Repositories.IntershipOfferRepository;
import com.example.backend.Repositories.SupervisorRepo;
import com.example.backend.Repositories.VisitorRepository;
import com.example.backend.ServicesImplement.IntershipOffreServiceImpl;
import com.example.backend.entities.ImageModel;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.IntershipOffreHelper;
import com.example.backend.entities.Supervisor;
import com.example.backend.entities.Visitor;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class IntershipOffreService implements IntershipOffreServiceImpl {

    @Autowired
    private VisitorRepository visitorRepository;
    private ImageRepository imageRepository;
    private IntershipOfferRepository intershipOfferRepository;
    private SupervisorRepo supervisorRepo;

    @Autowired
    public IntershipOffreService(IntershipOfferRepository intershipOfferRepository,
            VisitorRepository visitorRepository) {
        super();
        this.visitorRepository = visitorRepository;
        this.intershipOfferRepository = intershipOfferRepository;
    }

    public IntershipOffre addIntershipOffre(IntershipOffre IntershipOffre) {
        IntershipOffre.setCreation_date(new Date(System.currentTimeMillis()));
        return intershipOfferRepository.save(IntershipOffre);
    }
    public List<IntershipOffre> getAllIntershipOffers() {
        return intershipOfferRepository.findAll();

    }
   /*  public List<IntershipOffreHelper> getAllIntershipOffers() {
        List<IntershipOffre> I= intershipOfferRepository.findAll();
        List<IntershipOffreHelper> list = new ArrayList<>();
        long l;
        for (IntershipOffre i : I) {
            IntershipOffreHelper ih=new IntershipOffreHelper();
            ih.setIntershipOffre(i);
          
            List<Visitor> v=visitorRepository.findAll();
            for (int j=0 ;j< v.size();j++){
            List<Optional<Supervisor>> s = supervisorRepo.findAllByVisitor(j);
           for (int index=0 ;index< s.size();index++){
            l= s.get(index).get().getId();
            List<IntershipOffre> iso=intershipOfferRepository.findBySupervisor(l);
            final Optional<ImageModel> retrievedImage = imageRepository.findByIdE(l);
           }
        }}
    }*/

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

    public IntershipOffre addFavoriteOffer(Long idIntern, Long idIntershipOffer) {
        Optional<IntershipOffre> offer = intershipOfferRepository.findById(idIntershipOffer);
        Optional<Visitor> intern = visitorRepository.findById(idIntern);
        intern.ifPresentOrElse(i -> {
            if (i.getFavoriteOffers() == null) {
                i.setFavoriteOffers(new ArrayList<>());
            }
            offer.ifPresent(o -> {
                i.getFavoriteOffers().add(i.getFavoriteOffers().size(), idIntershipOffer);
                visitorRepository.save(i);
            });
        }, () -> {
            throw new RuntimeException("Intern with ID " + idIntern + " not found");
        });

        return offer.orElseThrow(() -> new RuntimeException("Offer with ID " + idIntershipOffer + " not found"));
    }

    public List<IntershipOffre> getInternFavoriteOffers(Long idIntern) {
        Optional<Visitor> intern = visitorRepository.findById(idIntern);
        List<IntershipOffre> allOffers = intershipOfferRepository.findAll();
        List<IntershipOffre> favoriteOffers = new ArrayList<>();
        intern.ifPresent(i -> {
            List<Long> internOffers = i.getFavoriteOffers();
            for (Long offer : internOffers) {
                for (IntershipOffre o : allOffers) {
                    if (o.getId_intership_offre() == offer) {
                        favoriteOffers.add(o);
                    }
                }
            }
            System.out.println(favoriteOffers);
        });
        return favoriteOffers;
    }

}
