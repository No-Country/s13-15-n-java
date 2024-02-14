package com.nocountry.s13g15.controllers;

import com.nocountry.s13g15.dto.request.UsuarioRequestDto;
import com.nocountry.s13g15.dto.response.UsuarioResponseDto;
import com.nocountry.s13g15.entities.Usuario;
import com.nocountry.s13g15.services.IUsuarioService;
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
import java.util.List;

@RestController
@RequestMapping("api/v1/propietario")
@RequiredArgsConstructor
public class PropietarioRestController {

    private final IUsuarioService usuarioService;
    private static final Long  PROPIETARIO_ROLE = 1L;
    @PostMapping("/registrar")
    public ResponseEntity<UsuarioResponseDto> registrarPropietario(@Valid @RequestBody UsuarioRequestDto propietario) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.registrarUsuario(propietario, PROPIETARIO_ROLE));
    }

    @GetMapping("/obtener")
    @PreAuthorize("hasAuthority('PROPIETARIO')")
    public ResponseEntity<List<Usuario>> obtenerTodosLosUsuarios(){
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.obtenerUsuarios());
    }
    
}
