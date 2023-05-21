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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.ServicesImplement.EventServiceImplementation;
import com.example.backend.entities.Event;

@RestController
@RequestMapping("/api/v1/auth/events")
@CrossOrigin(origins = "*")
public class EventController {
    @Autowired
    private EventServiceImplementation eventServiceImplementation;

    @GetMapping("/all")
    public ResponseEntity<List<Event>> getAllEvents() {
        return ResponseEntity.ok(eventServiceImplementation.getAllEvents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(eventServiceImplementation.getEventById(id));
    }

    @PostMapping("/add")
    public ResponseEntity<Event> addEvent(@RequestBody Event event) {
        return ResponseEntity.ok(eventServiceImplementation.addEvent(event));
    }

    @GetMapping("/supervisor/{id}")
    public ResponseEntity<List<Event>> getEventsBySupervisor(@PathVariable("id") Long id) {
        return ResponseEntity.ok(eventServiceImplementation.getEventsBySupervisor(id));
    }

    @GetMapping("/intern/{id}")
    public ResponseEntity<List<Event>> getEventsByIntern(@PathVariable("id") Long id) {
        return ResponseEntity.ok(eventServiceImplementation.getEventsByIntern(id));
    }

    @GetMapping("/internMetingsSupervisor")
    public ResponseEntity<List<Event>> getInternMeetingsSupervisor(@RequestParam Long idIntern,
            @RequestParam Long idCandidacy) {
        return ResponseEntity.ok(eventServiceImplementation.getInternMeetingsSupervisor(idIntern, idCandidacy));
    }

    @GetMapping("/internMeetings/{idIntern}")
    public ResponseEntity<List<Event>> getInterEvents(@PathVariable("idIntern") Long idIntern) {
        return ResponseEntity.ok(eventServiceImplementation.getInterEvents(idIntern));
    }

    @PutMapping("/update")
    public ResponseEntity<Event> updateEvent(@RequestParam Long id, @RequestBody Event event) {
        return ResponseEntity.ok(eventServiceImplementation.updateEvent(id, event));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteEvent(@RequestParam Long idEvent) {
        eventServiceImplementation.deleteEvent(idEvent);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
