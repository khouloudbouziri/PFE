// package com.example.backend.Services;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.backend.ServicesImplement.IntershipOffreServiceImpl;
// import com.example.backend.entities.IntershipOffre;

// import jakarta.transaction.Transactional;

// @Service
// @Transactional
// public class IntershipOffreService {

//  private final IntershipOffreServiceImpl intershipOffreServiceImpl ;
//  @Autowired
// public IntershipOffreService(IntershipOffreServiceImpl intershipOffreServiceImpl) {
// 	super();
// 	this.intershipOffreServiceImpl = intershipOffreServiceImpl;
// }
 
//  public IntershipOffre addIntershipOffre(com.example.backend.entities.IntershipOffre IntershipOffre) {
// 	 return intershipOffreServiceImpl.save(IntershipOffre);
//  }
//  public List<IntershipOffre> getAllIntershipOffres(){
// 	 return intershipOffreServiceImpl.findAll();
	 
//  }
//  public IntershipOffre findIntershipOffreById(Long id) {
// 	 return  intershipOffreServiceImpl.findIntershipOffreById(id)
// 			 .orElseThrow(() ->new UserNotFoundException("User by id" + id +"was not found"));
//  }
//  public IntershipOffre updateIntershipOffreOffre(IntershipOffre IntershipOffre) {
// 	 return intershipOffreServiceImpl.save(IntershipOffre);
//  }
//  public void deleteIntershipOffreOffre(Long id) {
// 	 intershipOffreServiceImpl.deleteIntershipOffreOffreById(id);
//  }
// }

    
// }
