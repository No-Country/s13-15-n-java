package com.nocountry.s13g15.controllers;

import com.nocountry.s13g15.entities.Ciudad;
import com.nocountry.s13g15.services.ICiudadService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/ciudades")
@RequiredArgsConstructor
public class CiudadRestController {

    private final ICiudadService ciudadService;

    @PreAuthorize("hasAnyAuthority('JARDINERO', 'PROPIETARIO')")
    @GetMapping
    public ResponseEntity<List<Ciudad>> getCiudades(){
        return ResponseEntity.ok(ciudadService.getCiudades());
    }
}
