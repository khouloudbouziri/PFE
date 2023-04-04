package com.example.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Services.IntershipOffreService;
import com.example.backend.ServicesImplement.IntershipOffreServiceImpl;
import com.example.backend.entities.IntershipOffre;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/auth/intership")
public class intershipOffreController {

    @Autowired
    private IntershipOffreServiceImpl intershipOffreServiceImp;

    @Autowired
    public intershipOffreController(IntershipOffreService intershipOffreService) {
        super();
        this.intershipOffreServiceImp = intershipOffreServiceImp;
    }

    @GetMapping("/all")
    public ResponseEntity<List<IntershipOffre>> getAllIntershipOffers() {
        List<IntershipOffre> intershipOffres = intershipOffreServiceImp.getAllIntershipOffers();
        return new ResponseEntity<>(intershipOffres, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<IntershipOffre> getIntershipOfferById(@PathVariable("id") Long id) {
        IntershipOffre intershipOffer = intershipOffreServiceImp.getIntershipOfferById(id);
        return new ResponseEntity<>(intershipOffer, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<IntershipOffre> addIntershipOffre(@RequestBody IntershipOffre intershipOffer) {
        System.out.println("ok4");
        IntershipOffre newIntershipOffer = intershipOffreServiceImp.addIntershipOffre(intershipOffer);
        System.out.println("ok5");
        return new ResponseEntity<>(newIntershipOffer, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<IntershipOffre> updateintershipOffer(@RequestBody IntershipOffre intership) {
        IntershipOffre updatedintership = intershipOffreServiceImp.updateIntershipOffer(intership);
        return new ResponseEntity<>(updatedintership, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEintershipById(@PathVariable("id") Long id) {
        intershipOffreServiceImp.deleteIntershipById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
