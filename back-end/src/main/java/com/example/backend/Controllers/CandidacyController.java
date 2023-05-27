package com.example.backend.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Repositories.CandidacyRepository;
import com.example.backend.Services.CandidacyService;
import com.example.backend.ServicesImplement.CandidacyServiceImpl;
import com.example.backend.entities.Candidacy;
import com.example.backend.entities.CandidacyHelper;
import com.example.backend.entities.IntershipOffre;
import com.example.backend.entities.IntershipOffreHelper;
import com.example.backend.entities.Visitor;

import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/auth/candidacy")
public class CandidacyController {

    @Autowired
    private CandidacyServiceImpl candidacyServiceImpl;

    @Autowired
    private CandidacyRepository candidacyRepository;

    @Autowired
    public CandidacyController(CandidacyServiceImpl candidacyServiceImpl) {
        this.candidacyServiceImpl = candidacyServiceImpl;
    }

    @PostMapping("/{id_intershipOffer}")
    public ResponseEntity<Candidacy> addCandidacy(@RequestBody Candidacy candidacy,
            @PathVariable Long id_intershipOffer, @RequestParam Long id_intern) {
        return ResponseEntity.ok(candidacyServiceImpl.addCandidacy(candidacy, id_intershipOffer, id_intern));
    }

    @PostMapping("/spontaneousCandidacy")
    public ResponseEntity<Candidacy> spontaneousCandidacy(@RequestBody Candidacy candidacy) {
        return ResponseEntity.ok(candidacyServiceImpl.spontaneousCandidacy(candidacy));
    }

    @GetMapping("/internCandidacy/{id_intern}")
    public ResponseEntity<List<IntershipOffreHelper>> getInternCandidacy(@PathVariable("id_intern") Long id_intern) {
        return ResponseEntity.ok(candidacyServiceImpl.getInternCandidacy(id_intern));
    }

    @GetMapping("/offer/{id_intershipOffer}")
    public ResponseEntity<List<Visitor>> getInterns(@PathVariable("id_intershipOffer") Long id_intershipOffer) {
        return ResponseEntity.ok(candidacyServiceImpl.getInterns(id_intershipOffer));
    }

    @GetMapping("/offer/get")
    public ResponseEntity<CandidacyHelper> getById(@RequestParam Long id_candidacy) {
        return ResponseEntity.ok(candidacyServiceImpl.getCandidacyById(id_candidacy));
    }

    @GetMapping("/offerCandidacies")
    public ResponseEntity<List<CandidacyHelper>> getIntershipOfferCandidacies(@RequestParam Long id_offer) {
        return ResponseEntity.ok(candidacyServiceImpl.getIntershipOfferCandidacies(id_offer));
    }

    @GetMapping("/all")
    public ResponseEntity<List<CandidacyHelper>> getAll() {
        return ResponseEntity.ok(candidacyServiceImpl.getAll());
    }

    @GetMapping("/supervisorCandidacies/{id}")
    public ResponseEntity<List<Candidacy>> getCandidaciesBySupervisor(@PathVariable("id") Long idSupervisor) {
        return ResponseEntity.ok(candidacyServiceImpl.getCandidaciesBySupervisor(idSupervisor));
    }

    @GetMapping("/supervisorCandidacies/status/{id}")
    public ResponseEntity<List<Candidacy>> getCandidaciesBySupervisorAndStatus(@PathVariable("id") Long idSupervisor) {
        return ResponseEntity.ok(candidacyServiceImpl.getCandidaciesBySupervisorAndStatus(idSupervisor));
    }
    @GetMapping("/allDist")
    public ResponseEntity<List<CandidacyHelper>> getAllDist() {
        return ResponseEntity.ok(candidacyServiceImpl.getAllDist());
    }

    @GetMapping("/internValidatedCandidacies/{id}")
    public ResponseEntity<Boolean> getInternValidatedCandidacy(@PathVariable("id") Long idIntern) {
        return ResponseEntity.ok(candidacyServiceImpl.getInternValidatedCandidacy(idIntern));
    }

    @PutMapping("/validateCandidacy")
    public ResponseEntity<Optional<Candidacy>> validateCandidacy(@RequestParam Long idCandidacy) {
        return ResponseEntity.ok(candidacyServiceImpl.validateCandidacy(idCandidacy));
    }

    @PutMapping("/candidacyState")
    public ResponseEntity<Optional<Candidacy>> changeCandidacyState(@RequestParam Long idCandidacy) {
        return ResponseEntity.ok(candidacyServiceImpl.changeCandidacyState(idCandidacy));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteCandidacy(@RequestParam Long idCandidacy) {
        candidacyServiceImpl.deleteCandidacy(idCandidacy);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
