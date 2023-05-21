package com.example.backend.Controllers;

import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Services.IntershipOffreService;
import com.example.backend.ServicesImplement.IntershipOffreServiceImpl;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.IntershipOffreHelper;

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
    public ResponseEntity<List<IntershipOffreHelper>> getAllIntershipOffers() {
        List<IntershipOffreHelper> intershipOffres = intershipOffreServiceImp.getAllIntershipOffers();
        return new ResponseEntity<>(intershipOffres, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<IntershipOffreHelper> getIntershipOfferById(@PathVariable("id") Long id) {
        IntershipOffreHelper intershipOffer = intershipOffreServiceImp.getIntershipOfferById(id);
        return new ResponseEntity<>(intershipOffer, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<IntershipOffre> addIntershipOffre(@RequestBody IntershipOffre intershipOffer) {
        IntershipOffre newIntershipOffer = intershipOffreServiceImp.addIntershipOffre(intershipOffer);
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

    @PostMapping("/addFavoriteOffer")
    public ResponseEntity<IntershipOffre> addFavoriteOffer(@RequestBody Map<String, Object> payload) {
        Long idIntern = Long.parseLong(payload.get("idIntern").toString());
        Long idIntershipOffer = Long.parseLong(payload.get("idIntershipOffer").toString());
        IntershipOffre newIntershipOffer = intershipOffreServiceImp.addFavoriteOffer(idIntern, idIntershipOffer);
        return new ResponseEntity<>(newIntershipOffer, HttpStatus.OK);
    }

    @GetMapping("favoriteOffers/{id}")
    public ResponseEntity<List<IntershipOffreHelper>> getInternFavoriteOffers(@PathVariable("id") Long id) {
        List<IntershipOffreHelper> internFavoriteOffers = intershipOffreServiceImp.getInternFavoriteOffers(id);
        return new ResponseEntity<>(internFavoriteOffers, HttpStatus.OK);

    }

}
