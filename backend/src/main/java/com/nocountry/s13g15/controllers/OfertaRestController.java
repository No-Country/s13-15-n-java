package com.nocountry.s13g15.controllers;

import com.nocountry.s13g15.dto.request.OfertaRequestDto;
import com.nocountry.s13g15.dto.response.OfertaResponseDto;
import com.nocountry.s13g15.services.impl.OfertaServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("api/v1/oferta")
@RequiredArgsConstructor
public class OfertaRestController {
    private final OfertaServiceImpl ofertaService;

    @PreAuthorize("hasAuthority('PROPIETARIO')")
    @PostMapping("/publicar")
    public ResponseEntity<OfertaResponseDto> publicarOferta(@Valid @RequestBody OfertaRequestDto oferta) {
        return ResponseEntity.status(HttpStatus.CREATED).body(ofertaService.publicarOferta(oferta));
    }


}
