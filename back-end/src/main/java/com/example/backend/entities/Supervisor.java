package com.example.backend.entities;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
public class Supervisor  {
   private Visitor visitor;
   private String firstname;
   private String lastname;
   private String phone_number;
   private  String email;
   private  String password;
   private  String photo_url;



}
