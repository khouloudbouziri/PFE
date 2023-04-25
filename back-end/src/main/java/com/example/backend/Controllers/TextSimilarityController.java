package com.example.backend.Controllers;


import java.util.Optional;

import org.apache.commons.text.similarity.CosineDistance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.ServicesImplement.CandidacyServiceImpl;
import com.example.backend.ServicesImplement.IntershipOffreServiceImpl;
import com.example.backend.ServicesImplement.VisitorServiceImp;
import com.example.backend.entities.Candidacy;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.Visitor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/auth")
public class TextSimilarityController {
    @Autowired 
    private CandidacyServiceImpl csi;
    @Autowired
    private IntershipOffreServiceImpl iosi;
    @Autowired
    private VisitorServiceImp vsi;
    
     @PostMapping("/similarity/cosine")
    public void cosineSimilarity(Long id ,Long idC) {
        IntershipOffre iO = iosi.getIntershipOfferById(id);
        Optional<Candidacy> C = csi.getCandidacyById(idC);
        String text1 = iO.getRequired_profile();
        String text3 = iO.getTechnical_environement();
        String text2 = iO.getCompany();
       // Optional<Visitor> v =vsi.getCompanyDeptByCompanyName(text2);
       // String dep = v.get().getCompanyDepartement();
        String text7 = C.get().getSkills();
        String text6 = C.get().getLevel();
        String text5 = C.get().getUniversity_department();
        CosineDistance cosineDistance = new CosineDistance();
        double cosineSimilarity1 = 1 - cosineDistance.apply(text1.toLowerCase(), text6.toLowerCase());
        double cosineSimilarity2 = 1 - cosineDistance.apply(text3.toLowerCase(), text7.toLowerCase());
        double cosineSimilarity3 = 1 - cosineDistance.apply(text2.toLowerCase(), text5.toLowerCase());
        double cosineSimilarity = (cosineSimilarity1 + cosineSimilarity2 +cosineSimilarity3)/3;
        if (C.get().getMention()=="Très bien"){
            cosineSimilarity+=0.1;
        }
        else if(C.get().getMention()=="Bien"){
            cosineSimilarity+=0.05;
        }
        else if(C.get().isDid_intership()==true){
            cosineSimilarity+=0.075;
        }
        C.get().setScore(cosineSimilarity);
    }
    
    }
    
    


