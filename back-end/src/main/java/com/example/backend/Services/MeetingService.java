// package com.example.backend.Services;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.backend.Repositories.MeetingRepository;
// import com.example.backend.entities.Meeting;

// @Service
// public class MeetingService {

// @Autowired
// private MeetingRepository meetingRepository;

// public Meeting addMeeting(Meeting meeting) {
// return meetingRepository.save(meeting);
// }

// public void deleteMeeting(Long id) {
// meetingRepository.deleteById(id);
// }

// public Meeting updateMeeting(Meeting meeting) {
// return meetingRepository.save(meeting);
// }

// public List<Meeting> getAllMeetings() {
// return meetingRepository.findAll();
// }

// }
