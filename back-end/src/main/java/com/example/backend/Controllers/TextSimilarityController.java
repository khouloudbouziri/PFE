package com.example.backend.Controllers;

import java.util.Map;
import java.util.Optional;

import org.apache.commons.text.similarity.CosineDistance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Repositories.CandidacyRepository;
import com.example.backend.ServicesImplement.CandidacyServiceImpl;
import com.example.backend.ServicesImplement.IntershipOffreServiceImpl;
import com.example.backend.ServicesImplement.VisitorServiceImp;
import com.example.backend.entities.Candidacy;
import com.example.backend.entities.CandidacyHelper;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.IntershipOffreHelper;

import jakarta.transaction.Transactional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/auth")
public class TextSimilarityController {
    @Autowired
    private CandidacyServiceImpl csi;
    @Autowired
    private IntershipOffreServiceImpl iosi;

    @Transactional
    @PostMapping("/similarity/cosine")
    public double cosineSimilarity(@RequestBody Map<String, Object> payload) {
        System.out.println("okkk");
        System.out.println(payload);
        Long idIntershipOffer = Long.parseLong(payload.get("idIntershipOffer").toString());
        Long idCandidacy = Long.parseLong(payload.get("idCandidacy").toString());
        System.out.println(idIntershipOffer);
        System.out.println(idCandidacy);
        IntershipOffreHelper iO = iosi.getIntershipOfferById(idIntershipOffer);
        System.out.println(iO.getIntershipOffre());
        CandidacyHelper C = csi.getCandidacyById(idCandidacy);
        System.out.println(C.getCandidacy());
        String text1 = iO.getIntershipOffre().getRequired_profile();
        String text3 = iO.getIntershipOffre().getTechnical_environement();
        String text2 = iO.getIntershipOffre().getCompany();
        String text7 = C.getCandidacy().getSkills();
        String text6 = C.getCandidacy().getLevel();
        String text5 = C.getCandidacy().getUniversity_department();
        CosineDistance cosineDistance = new CosineDistance();
        double cosineSimilarity1 = 1 - cosineDistance.apply(text1.toLowerCase(), text6.toLowerCase());
        double cosineSimilarity2 = 1 - cosineDistance.apply(text3.toLowerCase(), text7.toLowerCase());
        double cosineSimilarity3 = 1 - cosineDistance.apply(text2.toLowerCase(), text5.toLowerCase());
        double cosineSimilarity = (cosineSimilarity1 + cosineSimilarity2 + cosineSimilarity3) / 3;
        System.out.println(cosineSimilarity);
        if (C.getCandidacy().getMention() == "Très bien") {
            cosineSimilarity += 0.01;
        } else if (C.getCandidacy().getMention() == "Bien") {
            cosineSimilarity += 0.005;
        } else if (C.getCandidacy().isDid_intership() == true) {
            cosineSimilarity += 0.0075;
        }
        System.out.println(cosineSimilarity);
        Candidacy candidacy = C.getCandidacy();
        candidacy.setScore(cosineSimilarity);
        csi.save(candidacy);
        System.out.println(cosineSimilarity);
        return cosineSimilarity;
    }

}
