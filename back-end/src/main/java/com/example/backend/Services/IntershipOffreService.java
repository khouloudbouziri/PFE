package com.example.backend.Services;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Exceptions.IntershipOfferNotFoundException;
import com.example.backend.Repositories.CandidacyRepository;
import com.example.backend.Repositories.ImageRepository;
import com.example.backend.Repositories.IntershipOfferRepository;
import com.example.backend.Repositories.SupervisorRepo;
import com.example.backend.Repositories.VisitorRepository;
import com.example.backend.ServicesImplement.IntershipOffreServiceImpl;
import com.example.backend.entities.Candidacy;
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
    @Autowired
    private ImageRepository imageRepository;
    // @Autowired
    // private IntershipOfferRepository intershipOfferRepository;
    @Autowired
    private SupervisorRepo supervisorRepo;
    private IntershipOfferRepository intershipOfferRepository;

    @Autowired
    private CandidacyRepository candidacyRepository;

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

    public List<IntershipOffreHelper> getAllIntershipOffers() {
        List<IntershipOffreHelper> list = new ArrayList<>();

        List<Supervisor> supervisors = supervisorRepo.findAll();
        for (Supervisor s : supervisors) {
            Long V = s.getVisitor();
            Long S = s.getId();
            final Optional<ImageModel> retrievedImage = imageRepository.findByIdE(V);
            List<IntershipOffre> iso = intershipOfferRepository.findBySupervisor(S);
            for (int index = 0; index < iso.size(); index++) {
                IntershipOffreHelper iHelper = new IntershipOffreHelper();
                iHelper.setIntershipOffre(iso.get(index));
                if (retrievedImage.isPresent()) {
                    byte[] image = retrievedImage.get().getPicByte();
                    iHelper.setImage(decompressBytes(image));
                }

                else {

                    iHelper.setImage(decompressBytes(imageRepository.findById((long) 1).get().getPicByte()));
                }
                list.add(iHelper);
            }

        }
        return list;
    }

    public IntershipOffreHelper getIntershipOfferById(Long id) {
        List<IntershipOffreHelper> list = this.getAllIntershipOffers();
        IntershipOffreHelper i = new IntershipOffreHelper();
        for (int index = 0; index < list.size(); index++) {
            if (list.get(index).getIntershipOffre().getId_intership_offre() == id) {
                i = list.get(index);
            }

        }
        return i;
    }

    // public IntershipOffre updatIntershipOffre(Long id, IntershipOffre offer) {
    // IntershipOffre existingOffer = intershipOfferRepository.findById(id)
    // .orElseThrow(() -> new IntershipOfferNotFoundException("l'offre n'existe
    // pas"));
    // if (existingOffer != null) {
    // existingOffer.setType(offer.getType());
    // existingOffer.setTopic(offer.getTopic());
    // existingOffer.setAddress(offer.getAddress());
    // existingOffer.setDuration(offer.getDuration());
    // existingOffer.setRequired_work(offer.getRequired_work());
    // existingOffer.setTechnical_environement(offer.getTechnical_environement());
    // existingOffer.setRequired_profile(offer.getRequired_profile());
    // existingOffer.setInterns_number(offer.getInterns_number());
    // existingOffer.setRenumerete(offer.getRenumerete());
    // existingOffer.setCompany(offer.getCompany());
    // existingOffer.setWorking_from_home(offer.isWorking_from_home());
    // return intershipOfferRepository.save(existingOffer);
    // } else {
    // return null;
    // }
    // }

    public IntershipOffre updatIntershipOffre(Long id, IntershipOffre offer) {
        IntershipOffreHelper existingOffer = getIntershipOfferById(id);
        if (existingOffer == null) {
            System.out.println("l'offre n'existe pas");
        } else {
            System.out.println(existingOffer.getIntershipOffre());
            existingOffer.getIntershipOffre().setType(offer.getType());
            existingOffer.getIntershipOffre().setTopic(offer.getTopic());
            existingOffer.getIntershipOffre().setAddress(offer.getAddress());
            existingOffer.getIntershipOffre().setDuration(offer.getDuration());
            existingOffer.getIntershipOffre().setRequired_work(offer.getRequired_work());
            existingOffer.getIntershipOffre()
                    .setTechnical_environement(offer.getTechnical_environement());
            existingOffer.getIntershipOffre().setRequired_profile(offer.getRequired_profile());
            existingOffer.getIntershipOffre().setInterns_number(offer.getInterns_number());
            existingOffer.getIntershipOffre().setRenumerete(offer.getRenumerete());
            existingOffer.getIntershipOffre().setCompany(offer.getCompany());
            existingOffer.getIntershipOffre().setWorking_from_home(offer.isWorking_from_home());
            return intershipOfferRepository.save(existingOffer.getIntershipOffre());
        }
        return null;
    }

    // public IntershipOffre updateIntershipOffer(IntershipOffre IntershipOffre) {
    // return intershipOfferRepository.save(IntershipOffre);
    // }

    public void deleteIntershipById(Long idIntershipOffer) {
        System.out.println("ok1");
        List<Candidacy> candidacies = candidacyRepository.findAllByIdIntershipOffer(idIntershipOffer);
        System.out.println("ok2");
        candidacyRepository.deleteAll(candidacies);
        intershipOfferRepository.deleteById(idIntershipOffer);
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

    public List<IntershipOffreHelper> getInternFavoriteOffers(Long idIntern) {
        Optional<Visitor> intern = visitorRepository.findById(idIntern);
        List<IntershipOffreHelper> list = new ArrayList<>();
        // List<IntershipOffre> allOffers = intershipOfferRepository.findAll();
        List<IntershipOffre> favoriteOffers = new ArrayList<>();
        List<Supervisor> supervisors = supervisorRepo.findAll();
        for (Supervisor s : supervisors) {
            Long V = s.getVisitor();
            Long S = s.getId();
            final Optional<ImageModel> retrievedImage = imageRepository.findByIdE(V);
            List<IntershipOffre> iso = intershipOfferRepository.findBySupervisor(S);
            IntershipOffreHelper iHelper = new IntershipOffreHelper();
            intern.ifPresent(i -> {
                List<Long> internOffers = i.getFavoriteOffers();
                for (Long offer : internOffers) {
                    for (int index = 0; index < iso.size(); index++) {
                        if (iso.get(index).getId_intership_offre() == offer) {
                            // favoriteOffers.add(o);
                            iHelper.setIntershipOffre(iso.get(index));

                            if (retrievedImage.isPresent()) {
                                byte[] image = retrievedImage.get().getPicByte();
                                iHelper.setImage(decompressBytes(image));
                            }

                            else {

                                iHelper.setImage(
                                        decompressBytes(imageRepository.findById((long) 77).get().getPicByte()));
                            }
                        }
                    }
                }
                System.out.println(favoriteOffers);
            });

            list.add(iHelper);
        }

        return list;
    }

    public static byte[] decompressBytes(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }

            outputStream.close();
        } catch (IOException ioe) {
        } catch (DataFormatException e) {
        }
        return outputStream.toByteArray();
    }

}
