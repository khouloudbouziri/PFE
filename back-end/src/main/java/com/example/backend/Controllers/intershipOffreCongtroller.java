// package com.example.backend.Controllers;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.backend.entities.Intership;

// @RestController
// @CrossOrigin(origins="*")
// @RequestMapping("/intership")
// public class intershipOffreController {

//    private final IntershipOffreService intershipOffreService;
//    @Autowired 
//    public IntershipResource(IntershipOffreService intershipOffreService) {
// 		super();
// 		this.intershipOffreService = intershipOffreService;
// 	}
//    @GetMapping ("/all")
//    public  ResponseEntity<List<Intership>>getAllIntership(){
// 	   List<Intership> interships =intershipOffreService.getAllinterships();
// 	   return new ResponseEntity<>(interships,HttpStatus.OK);
//    }
//    @GetMapping ("/find/{id}")
//    public  ResponseEntity<Intership>getIntershipById(@PathVariable("id")Long id){
// 	  Intership intership =intershipOffreService.findIntershipById(id);
// 	   return new ResponseEntity<>(intership,HttpStatus.OK);
//    }
//    @PostMapping ("/add")
//    public  ResponseEntity<Intership>AddEintership(@RequestBody Intership intership){
// 	  Intership newintership =intershipOffreService.addEintership(intership);
// 	   return new ResponseEntity<>(newintership,HttpStatus.CREATED);
//    }
//    @PutMapping ("/update")
//    public  ResponseEntity<Intership>updateEintership(@RequestBody Intership intership){
// 	  Intership updateeintership =intershipOffreService.updateEintership(intership);
// 	   return new ResponseEntity<>(updateeintership,HttpStatus.OK);
//    }
//    @DeleteMapping ("/delete/{id}")
//    public  ResponseEntity<?>DeleteEintershipById(@PathVariable("id")Long id){
// 		intershipOffreService.deleteEintership(id);
// 		   return new ResponseEntity<>(HttpStatus.OK);
// 	   }
   
// }
    

