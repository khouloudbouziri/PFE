package com.example.backend.ServicesImplement;

import java.util.List;

import com.example.backend.entities.Event;

public interface EventServiceImplementation {
    public List<Event> getAllEvents();

    public Event getEventById(Long id);

    public Event addEvent(Event event);

    public Event updateEvent(Long id, Event event);

    public void deleteEvent(Long id);

   // public Event getByIntership(Long idSupervisor);
}
