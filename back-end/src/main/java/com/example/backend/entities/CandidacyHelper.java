package com.example.backend.entities;

import java.util.Optional;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CandidacyHelper {
    private Candidacy candidacy;
    private Object image;
}
