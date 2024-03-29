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

import com.example.backend.Repositories.CandidacyRepository;
import com.example.backend.Repositories.ImageRepository;
import com.example.backend.Repositories.IntershipOfferRepository;
import com.example.backend.Repositories.VisitorRepository;
import com.example.backend.ServicesImplement.CandidacyServiceImpl;
import com.example.backend.entities.Candidacy;
import com.example.backend.entities.CandidacyHelper;
import com.example.backend.entities.ImageModel;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.IntershipOffreHelper;
import com.example.backend.entities.Visitor;
import com.example.backend.Services.IntershipOffreService;

@Service
public class CandidacyService implements CandidacyServiceImpl {

    @Autowired
    private final CandidacyRepository candidacyRepository;
    @Autowired
    private final VisitorRepository visitorRepository;
    @Autowired
    private final IntershipOfferRepository intershipOfferRepository;
    @Autowired
    private IntershipOffreService intershipOffreService;
    @Autowired
    ImageRepository imageRepository;

    @Autowired
    public CandidacyService(CandidacyRepository candidacyRepository, VisitorRepository visitorRepository,
            IntershipOfferRepository intershipOfferRepository) {
        super();
        this.candidacyRepository = candidacyRepository;
        this.visitorRepository = visitorRepository;
        this.intershipOfferRepository = intershipOfferRepository;
    }

    public Candidacy addCandidacy(Candidacy candidacy, Long id_intershipOffer, Long id_intern) {
        candidacy.setIdIntershipOffer(id_intershipOffer);
        candidacy.setIdIntern(id_intern);
        candidacy.setStatus("En cours");

        Optional<Candidacy> existingCandidacy = candidacyRepository.findByIdInternAndIdIntershipOffer(id_intern,
                id_intershipOffer);
        if (existingCandidacy.isPresent()) {
            throw new RuntimeException("Le stagiaire a deja postule pour cet offre");
        }
        Optional<IntershipOffre> intershipOffer = intershipOfferRepository.findById(id_intershipOffer);
        intershipOffer.ifPresent(i -> {
            i.setCandidacy_number(i.getCandidacy_number() + 1);
            intershipOfferRepository.save(i);
        });
        return candidacyRepository.save(candidacy);
    }

    public Candidacy spontaneousCandidacy(Candidacy candidacy) {
        return candidacyRepository.save(candidacy);
    }

    public List<IntershipOffreHelper> getInternCandidacy(Long id_intern) {
        List<Candidacy> allCandidacies = candidacyRepository.findAllByIdIntern(id_intern);

        Optional<Visitor> intern = visitorRepository.findById(id_intern);
        List<IntershipOffreHelper> internCandidacies = new ArrayList<>();
        intern.ifPresent(i -> {
            IntershipOffreHelper allIntershipOffers = new IntershipOffreHelper();
            for (Candidacy candidacy : allCandidacies) {
                if (candidacy.getStatus().equals("En cours")) {
                    allIntershipOffers = intershipOffreService.getIntershipOfferById(candidacy.getIdIntershipOffer());
                    internCandidacies.add(allIntershipOffers);
                }
                // // allIntershipOffers.ifPresent(internCandidacies::add);
                // allIntershipOffers.ifPresent(offer -> {
                // if (candidacy.getStatus().equals("En cours")) {
                // internCandidacies.add(offer);
                // }
                // });
            }

        });
        return internCandidacies;

    }

    public List<CandidacyHelper> getIntershipOfferCandidacies(Long id_offer) {
        List<Candidacy> candidacies = candidacyRepository.findAllByIdIntershipOffer(id_offer);
        List<CandidacyHelper> listCandidat = new ArrayList<>();
        for (Candidacy candidacy : candidacies) {
            CandidacyHelper candidacyHelper = new CandidacyHelper();
            candidacyHelper.setCandidacy(candidacy);
            final Optional<ImageModel> retrievedImage = imageRepository.findByIdE(candidacy.getIdIntern());
            if (retrievedImage.isPresent()) {
                byte[] image = retrievedImage.get().getPicByte();

                // image.setPicByte(decompressBytes(image.getPicByte()));
                candidacyHelper.setImage(decompressBytes(image));
            }

            else {

                candidacyHelper.setImage(decompressBytes(imageRepository.findById((long) 7).get().getPicByte()));
            }
            listCandidat.add(candidacyHelper);
        }

        return listCandidat;
    }

    public List<Candidacy> getCandidaciesBySupervisor(Long idSupervisor) {
        List<IntershipOffre> supervisorOffers = intershipOfferRepository.findBySupervisor(idSupervisor);
        List<Candidacy> offerCandidacies = candidacyRepository.findAll();
        List<Candidacy> candidacies = new ArrayList<>();
        for (IntershipOffre offer : supervisorOffers) {
            for (Candidacy candidacy : offerCandidacies) {
                if (candidacy.getStatus() != null) {
                    String s = (candidacy.getStatus()).toString();
                    String m = "En cours";
                    if ((offer.getId_intership_offre() == candidacy.getIdIntershipOffer()) && (s.equals(m))) {
                        candidacies.add(candidacy);
                    }
                }
            }
        }
        return candidacies;

    }

    public List<Candidacy> getCandidaciesBySupervisorAndStatus(Long idSupervisor) {
        List<IntershipOffre> supervisorOffers = intershipOfferRepository.findBySupervisor(idSupervisor);
        List<Candidacy> offerCandidacies = candidacyRepository.findAll();
        List<Candidacy> candidacies = new ArrayList<>();
        for (IntershipOffre offer : supervisorOffers) {
            for (Candidacy candidacy : offerCandidacies) {
                if (candidacy.getStatus() != null) {
                    String s = (candidacy.getStatus()).toString();
                    String m = "Accepted";
                    if ((offer.getId_intership_offre() == candidacy.getIdIntershipOffer()) && (s.equals(m))) {
                        candidacies.add(candidacy);

                    }
                }
            }
        }
        return candidacies;

    }

    public List<CandidacyHelper> getAll() {

        List<Candidacy> AllCandidacies = candidacyRepository.findAll();
        List<CandidacyHelper> candidacies = new ArrayList<>();

        for (Candidacy candidacy : AllCandidacies) {
            CandidacyHelper candidacyHelper = new CandidacyHelper();
            candidacyHelper.setCandidacy(candidacy);
            final Optional<ImageModel> retrievedImage = imageRepository.findByIdE(candidacy.getIdIntern());
            if (retrievedImage.isPresent()) {
                byte[] image = retrievedImage.get().getPicByte();
                // image.setPicByte(decompressBytes(image.getPicByte()));
                candidacyHelper.setImage(decompressBytes(image));
            }

            else {

                candidacyHelper.setImage(decompressBytes(imageRepository.findById((long) 7).get().getPicByte()));
            }
            candidacies.add(candidacyHelper);
        }

        return candidacies;
    }
    public List<CandidacyHelper> getAllDist() {

        List<Candidacy> AllCandidacies = candidacyRepository.findAllDistinct();
        List<CandidacyHelper> candidacies = new ArrayList<>();

        for (Candidacy candidacy : AllCandidacies) {
            CandidacyHelper candidacyHelper = new CandidacyHelper();
            candidacyHelper.setCandidacy(candidacy);
            final Optional<ImageModel> retrievedImage = imageRepository.findByIdE(candidacy.getIdIntern());
            if (retrievedImage.isPresent()) {
                byte[] image = retrievedImage.get().getPicByte();
                // image.setPicByte(decompressBytes(image.getPicByte()));
                candidacyHelper.setImage(decompressBytes(image));
            }

            else {

                candidacyHelper.setImage(decompressBytes(imageRepository.findById((long) 77).get().getPicByte()));
            }
            candidacies.add(candidacyHelper);
        }

        return candidacies;
    }

    public List<Visitor> getInterns(Long idIntershipOffer) {
        List<Candidacy> allCandidacies = candidacyRepository.findAll();
        List<Visitor> allInterns = visitorRepository.findAll();
        Optional<IntershipOffre> offer = intershipOfferRepository.findById(idIntershipOffer);
        List<Visitor> interns = new ArrayList<>();
        offer.ifPresent(o -> {
            for (Candidacy candidacy : allCandidacies) {
                if (candidacy.getIdIntershipOffer() == o.getId_intership_offre()) {
                    for (Visitor intern : allInterns) {
                        if (candidacy.getIdIntern() == intern.getId()) {
                            interns.add(intern);
                        }
                    }
                }
            }

        });
        return interns;
    }

    public List<Candidacy> getCByIntershipOfferId(Long id) {
        List<Candidacy> Cs = candidacyRepository.findByIdIntershipOffer(id);

        return Cs;
    }

    public CandidacyHelper getCandidacyById(Long idC) {
        List<CandidacyHelper> list = this.getAll();
        CandidacyHelper i = new CandidacyHelper();
        for (int index = 0; index < list.size(); index++) {

            if (list.get(index).getCandidacy().getIdCandidacy().longValue() == idC.longValue()) {
                i = list.get(index);
            }

        }
        return i;

    }

    public void save(Candidacy c) {
        candidacyRepository.save(c);
    }

    public void deleteCandidacy(Long idCandidacy) {
        Optional<Candidacy> candidacy = candidacyRepository.findById(idCandidacy);
        candidacy.ifPresent(c -> {
            Optional<IntershipOffre> intershipOffre = intershipOfferRepository.findById(c.getIdIntershipOffer());
            intershipOffre.ifPresent(i -> {
                i.setCandidacy_number(i.getCandidacy_number() - 1);
                intershipOfferRepository.save(i);
            });
        });
        candidacyRepository.deleteById(idCandidacy);
    }

    public Optional<Candidacy> changeCandidacyState(Long idCandidacy) {
        Optional<Candidacy> candidacy = candidacyRepository.findById(idCandidacy);
        candidacy.ifPresent(c -> {
            c.setStatus("Accepted");
            candidacyRepository.save(c);
        });
        return candidacy;
    }

    public Optional<Candidacy> validateCandidacy(Long idCandidacy) {
        Optional<Candidacy> candidacy = candidacyRepository.findById(idCandidacy);
        candidacy.ifPresent(c -> {
            c.setStatus("Validated");
            candidacyRepository.save(c);
        });
        return candidacy;
    }

    public boolean getInternValidatedCandidacy(Long idIntern) {
        List<Candidacy> candidacies = candidacyRepository.findAllByIdIntern(idIntern);
        boolean status = false;
        for (Candidacy candidacy : candidacies) {
            if (candidacy.getStatus().equals("Validated")) {
                status = true;
            }
        }
        return status;
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
