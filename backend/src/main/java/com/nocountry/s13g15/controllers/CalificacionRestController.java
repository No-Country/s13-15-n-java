package com.nocountry.s13g15.controllers;

import com.nocountry.s13g15.dto.request.CalificacionRequestDto;
import com.nocountry.s13g15.dto.response.CalificacionResponseDto;
import com.nocountry.s13g15.services.impl.CalificacionServiceImpl;
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
@RequestMapping("api/v1/calificacion")
@RequiredArgsConstructor
public class CalificacionRestController {
    private final CalificacionServiceImpl calificacionService;

    @PreAuthorize("hasAuthority('PROPIETARIO')")
    @PostMapping("/registrar")
    public ResponseEntity<CalificacionResponseDto> registrarCalificacion(@Valid @RequestBody CalificacionRequestDto calificacionRequestDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(calificacionService.registrarCalificacion(calificacionRequestDto));
    }
}
