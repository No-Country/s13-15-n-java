package com.nocountry.s13g15.controllers;

import com.nocountry.s13g15.dto.request.UsuarioRequestDto;
import com.nocountry.s13g15.dto.response.UsuarioResponseDto;
import com.nocountry.s13g15.services.IUsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("api/v1/jardinero")
@RequiredArgsConstructor
public class JardineroRestController {

    private final IUsuarioService usuarioService;
    private static final Long  JARDINERO_ROLE = 2L;
    @PostMapping("/registrar")
    public ResponseEntity<UsuarioResponseDto> registrarJardinero(@Valid @RequestBody UsuarioRequestDto jardinero) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.registrarUsuario(jardinero, JARDINERO_ROLE));
    }
}
