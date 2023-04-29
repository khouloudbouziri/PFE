package com.example.backend.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Exceptions.EventNotFoundException;
import com.example.backend.Repositories.EventRepository;
import com.example.backend.ServicesImplement.EventServiceImplementation;
import com.example.backend.entities.Event;

@Service
public class EventService implements EventServiceImplementation {
    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElseThrow(() -> new EventNotFoundException("l'evenemnet n'existe pas"));
    }

    public Event addEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event updateEvent(Long id, Event event) {
        Event existingEvent = eventRepository.findById(id)
                .orElseThrow(() -> new EventNotFoundException("l'evenemnet n'existe pas"));
        if (existingEvent != null) {
            existingEvent.setTitle(event.getTitle());
            existingEvent.setStartDateTime(event.getStartDateTime());
            existingEvent.setEndDateTime(event.getEndDateTime());
            existingEvent.setDescription(event.getDescription());
            return eventRepository.save(existingEvent);
        } else {
            return null;
        }
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }

}
