package com.nocountry.s13g15.services.impl;

import com.nocountry.s13g15.entities.Ciudad;
import com.nocountry.s13g15.repositories.CiudadRepository;
import com.nocountry.s13g15.services.ICiudadService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CiudadServiceImpl implements ICiudadService {
    private final CiudadRepository ciudadRepository;
    @Override
    public List<Ciudad> getCiudades() {
        return ciudadRepository.findAll();
    }
}
