package com.example.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.ServicesImplement.EventServiceImplementation;
import com.example.backend.entities.Event;

@RestController
@RequestMapping("/api/v1/auth/events")
@CrossOrigin(origins = "*")
public class EventController {

    private final EventServiceImplementation eventServiceImplementation;

    @Autowired
    public EventController(EventServiceImplementation eventServiceImplementation) {
        this.eventServiceImplementation = eventServiceImplementation;
    }

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

}
