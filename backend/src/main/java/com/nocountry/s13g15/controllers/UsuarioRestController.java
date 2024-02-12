package com.nocountry.s13g15.controllers;


import com.nocountry.s13g15.dto.request.UsuarioRequestDto;
import com.nocountry.s13g15.dto.response.UsuarioResponseDto;
import com.nocountry.s13g15.entities.Usuario;
import com.nocountry.s13g15.services.IUsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/usuario")
@RequiredArgsConstructor
public class UsuarioRestController {
    private final IUsuarioService usuarioService;
    @PostMapping("/registrar")
    public ResponseEntity<UsuarioResponseDto> registrarAprendiz(@Valid @RequestBody UsuarioRequestDto aprendiz) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.registrarUsuario(aprendiz));
    }
    @GetMapping("/obtener")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<List<Usuario>> obtenerTodosLosUsuarios(){
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.obtenerUsuarios());
    }
}
