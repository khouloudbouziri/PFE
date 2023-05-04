package com.example.backend.Services;

import java.util.List;
import java.util.Optional;

import javax.naming.event.EventDirContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Exceptions.EventNotFoundException;
import com.example.backend.Repositories.CandidacyRepository;
import com.example.backend.Repositories.EventRepository;
import com.example.backend.Repositories.IntershipOfferRepository;
import com.example.backend.ServicesImplement.EventServiceImplementation;
import com.example.backend.entities.Candidacy;
import com.example.backend.entities.Event;
import com.example.backend.entities.IntershipOffre;

@Service
public class EventService implements EventServiceImplementation {
    @Autowired
     EventRepository eventRepository;
    @Autowired
    CandidacyRepository candidacyRepository;
    @Autowired
     IntershipOfferRepository intershipOfferRepository;

   

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

    

    /*@Query(" select e   from Event e , Candidacy c ,IntershipOffre i where e.idSupervisor=i.CAST(supervisor AS bigint ) AS  AND c.idIntershipOffer=i.id_intership_offre")
   */
  /*  public Event getByIntership(Long id){
    List<Event> l= eventRepository.getByIntership(id);
      List<Candidacy> allCandidacies=candidacyRepository.findAllById(null);
      String s= id.toString();
      List<IntershipOffre> allIntershipOffres=(List<IntershipOffre>) intershipOfferRepository.findBySupervisor(s);
      
     
      
    }*/

}
