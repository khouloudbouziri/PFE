package com.example.backend.Controllers;

import java.util.Optional;

import org.apache.commons.text.similarity.CosineDistance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Repositories.VisitorRepository;
import com.example.backend.Services.VisitorService;
import com.example.backend.ServicesImplement.VisitorServiceImp;
import com.example.backend.entities.Visitor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/auth")
public class TextSimilarityController {
    @Autowired 
    private VisitorServiceImp visitorServicei;
  
    
     @PostMapping("/similarity/cosine")
    public double cosineSimilarity() {
        Visitor v1 = visitorServicei.findVisitorById((long) 1);
        Visitor v2 = visitorServicei.findVisitorById((long)52);
        String text1 = v1.getEmail();
        String text2 = v2.getFirstname();
        System.out.println(text1);
        System.out.println(text2);
        CosineDistance cosineDistance = new CosineDistance();
        double cosineSimilarity = 1 - cosineDistance.apply(text1, text2);
        System.out.println(cosineSimilarity);
        return cosineSimilarity;
    }
    
    public static class TextPair {
        private String text1;
        private String text2;
        
        public String getText1() {
            return text1;
        }
        
        public String getText2() {
            return text2;
        }
        
        public void setText1(String text1) {
            this.text1 = text1;
        }
        
        public void setText2(String text2) {
            this.text2 = text2;
        }
    }
}

