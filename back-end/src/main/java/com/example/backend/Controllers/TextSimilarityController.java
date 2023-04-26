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
import com.example.backend.entities.IntershipOffre;

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
        Long idIntershipOffer = Long.parseLong(payload.get("idIntershipOffer").toString());
        Long idCandidacy = Long.parseLong(payload.get("idCandidacy").toString());
        System.out.println(idIntershipOffer);
        System.out.println(idCandidacy);
        IntershipOffre iO = iosi.getIntershipOfferById(idIntershipOffer);
        Optional<Candidacy> C = csi.getCandidacyById(idCandidacy);
        String text1 = iO.getRequired_profile();
        String text3 = iO.getTechnical_environement();
        String text2 = iO.getCompany();
        String text7 = C.get().getSkills();
        String text6 = C.get().getLevel();
        String text5 = C.get().getUniversity_department();
        CosineDistance cosineDistance = new CosineDistance();
        double cosineSimilarity1 = 1 - cosineDistance.apply(text1.toLowerCase(), text6.toLowerCase());
        double cosineSimilarity2 = 1 - cosineDistance.apply(text3.toLowerCase(), text7.toLowerCase());
        double cosineSimilarity3 = 1 - cosineDistance.apply(text2.toLowerCase(), text5.toLowerCase());
        double cosineSimilarity = (cosineSimilarity1 + cosineSimilarity2 +cosineSimilarity3)/3;
        if (C.get().getMention()=="Très bien"){
            cosineSimilarity+= 0.01;
        }
        else if(C.get().getMention()=="Bien"){
            cosineSimilarity+=0.005;
        }
        else if(C.get().isDid_intership()==true){
            cosineSimilarity+=0.0075;
        }
        System.out.println(cosineSimilarity);
        Candidacy candidacy = C.get();
        candidacy.setScore(cosineSimilarity);
        csi.save(candidacy);
        return cosineSimilarity;
    }
    
    }
    
    


