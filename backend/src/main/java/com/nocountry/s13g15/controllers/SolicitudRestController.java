package com.nocountry.s13g15.controllers;

import com.nocountry.s13g15.dto.response.SolicitudResponseDto;
import com.nocountry.s13g15.services.ISolicitudService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/solicitud")
@RequiredArgsConstructor
public class SolicitudRestController {

    @Autowired
    private final ISolicitudService iSolicitudService;

    @PreAuthorize("hasAuthority('JARDINERO')")
    @PostMapping("/registrar/{ofertaId}")
    public ResponseEntity<SolicitudResponseDto> registrarSolicitud(@PathVariable(value = "ofertaId")Long ofertaId) {
        return ResponseEntity.status(HttpStatus.CREATED).body(iSolicitudService.registrarSolicitud(ofertaId));
    }

}
