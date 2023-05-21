package com.example.backend.Services;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Exceptions.VisitorNotFoundException;
import com.example.backend.Repositories.CandidacyRepository;
import com.example.backend.Repositories.ImageRepository;
import com.example.backend.Repositories.IntershipOfferRepository;
import com.example.backend.Repositories.SupervisorRepo;
import com.example.backend.ServicesImplement.SupervisorServiceInterface;
import com.example.backend.entities.Candidacy;
import com.example.backend.entities.ImageModel;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.Supervisor;
import com.example.backend.entities.SupervisorHelper;

@Service
public class SupervisorService implements SupervisorServiceInterface {
    private final SupervisorRepo supervisorRepository;
    @Autowired
    private final IntershipOfferRepository intershipOfferRepository;
    @Autowired
    ImageRepository imageRepository;
    @Autowired
    CandidacyRepository candidacyRepository;

    @Autowired
    public SupervisorService(SupervisorRepo supervisorRepository, IntershipOfferRepository intershipOfferRepository) {
        this.supervisorRepository = supervisorRepository;
        this.intershipOfferRepository = intershipOfferRepository;
    }

    public List<Supervisor> getAllSupervisors() {
        return supervisorRepository.findAll();
    }

    public Supervisor findSupervisorById(Long id) {
        return supervisorRepository.findById(id)
                .orElseThrow(() -> new VisitorNotFoundException("Encadrant avec l'id" + id + "n'existe pas"));
    }

    public List<IntershipOffre> getIntershipOffers(Long id) {
        List<IntershipOffre> allIntershipOffers = intershipOfferRepository.findAll();
        Optional<Supervisor> supervisor = supervisorRepository.findById(id);
        List<IntershipOffre> supervisorOffers = new ArrayList<>();
        supervisor.ifPresent(s -> {
            for (IntershipOffre offer : allIntershipOffers) {
                long l = offer.getSupervisor();
                if (l == s.getId()) {
                    supervisorOffers.add(offer);
                }
            }
        });
        return supervisorOffers;
    }

    public List<SupervisorHelper> findSupervisorByIdCompany(Long id) {
        Optional<List<Supervisor>> s = supervisorRepository.findAllByVisitor(id);
        List<SupervisorHelper> listSup = new ArrayList<>();
        s.ifPresent(sup -> {
            for (int i = 0; i < sup.size(); i++) {
                System.out.println("d5alt");
                SupervisorHelper sh = new SupervisorHelper();
                sh.setSupervisor(sup.get(i));

                final Optional<ImageModel> retrievedImage = imageRepository.findByIdE((sup.get(i)).getId());
                if (retrievedImage.isPresent()) {
                    ImageModel image = retrievedImage.get();
                    if (image.getIdE() != null) {
                        image.setPicByte(decompressBytes(image.getPicByte()));
                        sh.setImage(Optional.of(image));
                        System.out.println("setted");
                    }
                } else {

                    sh.setImage(decompressBytes(imageRepository.findById((long) 1).get().getPicByte()));
                }

                listSup.add(sh);
                System.out.println("added");
            }
        });
        return listSup;
    }

    public Supervisor updateSupervisor(Supervisor supervisor) {
        return supervisorRepository.save(supervisor);
    }

    public void deleteSupervisor(Long id) {
        List<IntershipOffre> intershipOffres = intershipOfferRepository.findBySupervisor(id);
        for (IntershipOffre offer : intershipOffres) {
            List<Candidacy> candidacies = candidacyRepository.findAllByIdIntershipOffer(offer.getId_intership_offre());
            candidacyRepository.deleteAll(candidacies);
        }
        intershipOfferRepository.deleteAll(intershipOffres);
        supervisorRepository.deleteById(id);
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
