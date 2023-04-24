package com.example.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.ServicesImplement.VisitorServiceImp;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.Visitor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/auth/visitor")
public class VisitorController {

    private final VisitorServiceImp visitorServiceImp;

    @Autowired
    public VisitorController(VisitorServiceImp visitorServiceImp) {
        super();
        this.visitorServiceImp = visitorServiceImp;
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Visitor> getVisitorById(@PathVariable("id") Long id) {
        Visitor visitor = visitorServiceImp.findVisitorById(id);
        return new ResponseEntity<>(visitor, HttpStatus.OK);
    }

    @GetMapping("/find/offer/{id}")
    public ResponseEntity<List<IntershipOffre>> getIntershipOffers(@PathVariable("id") Long id) {
        List<IntershipOffre> companyOffers = visitorServiceImp.getIntershipOffers(id);
        return new ResponseEntity<>(companyOffers, HttpStatus.OK);
    }
}
