// package com.example.backend.Controllers;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.HttpStatusCode;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.backend.Services.MeetingService;
// import com.example.backend.entities.Meeting;

// @RestController
// @RequestMapping("/meetings")
// public class MeetingController {

// @Autowired
// private MeetingService meetingService;

// @PostMapping
// public ResponseEntity<Meeting> addMeeting(@RequestBody Meeting meeting) {
// Meeting newMeeting = meetingService.addMeeting(meeting);
// return new ResponseEntity<>(newMeeting, HttpStatus.CREATED);
// }

// @DeleteMapping("/{id}")
// public ResponseEntity<?> deleteMeeting(@PathVariable("id") Long id) {
// meetingService.deleteMeeting(id);
// return new ResponseEntity<>(HttpStatus.NO_CONTENT);
// }

// @PutMapping("/{id}")
// public ResponseEntity<Meeting> updateMeeting(@PathVariable("id") Long id,
// @RequestBody Meeting meeting) {
// if (!id.equals(meeting.getIdMeeting())) {
// return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
// }
// Meeting updatedMeeting = meetingService.updateMeeting(meeting);
// return new ResponseEntity<>(updatedMeeting, HttpStatus.OK);
// }

// @GetMapping("/all")
// public ResponseEntity<Meeting> getAllMeetings() {
// meetingService.getAllMeetings();
// return new ResponseEntity<>(HttpStatus.OK);
// }

// }
