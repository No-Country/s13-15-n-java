package com.nocountry.s13g15.controllers;

import com.nocountry.s13g15.dto.request.PerfilRequestDto;
import com.nocountry.s13g15.dto.response.PerfilResponseDto;
import com.nocountry.s13g15.services.IPerfilService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("api/v1/perfil")
@RequiredArgsConstructor
public class PerfilRestController {

    private final IPerfilService perfilService;

    @PreAuthorize("hasAnyAuthority('JARDINERO', 'PROPIETARIO')")
    @PostMapping("/crear")
    public ResponseEntity<PerfilResponseDto> crearPerfil(@Valid @RequestBody PerfilRequestDto perfilRequestDto){
        return ResponseEntity.status(HttpStatus.CREATED).body(perfilService.crearPerfil(perfilRequestDto));
    }

    @PreAuthorize("hasAnyAuthority('JARDINERO', 'PROPIETARIO')")
    @GetMapping("/ver")
    public ResponseEntity<PerfilResponseDto> verPerfil() {
        return ResponseEntity.ok(perfilService.verPerfil());
    }
}
