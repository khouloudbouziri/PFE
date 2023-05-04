package com.example.backend.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.backend.entities.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    

  // public  List<Event> getByIntership( Long idSupervisor );
}
