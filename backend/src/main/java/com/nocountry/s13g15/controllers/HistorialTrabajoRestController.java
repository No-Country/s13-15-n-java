package com.nocountry.s13g15.controllers;

import com.nocountry.s13g15.dto.request.CalificacionRequestDto;
import com.nocountry.s13g15.dto.request.HistorialUpdateRequestDto;
import com.nocountry.s13g15.dto.response.HistorialTrabajoResponseDto;
import com.nocountry.s13g15.services.impl.HistorialTrabajoServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/v1/historial-trabajo")
@RequiredArgsConstructor
public class HistorialTrabajoRestController {

    private final HistorialTrabajoServiceImpl historialTrabajoService;

    @PreAuthorize("hasAuthority('JARDINERO')")
    @PostMapping("/registrar/{procesoTrabajoId}")
    public ResponseEntity<HistorialTrabajoResponseDto> registrarHistorialTrabajo(@PathVariable(value = "procesoTrabajoId")Long procesoTrabajoId) {
        return ResponseEntity.status(HttpStatus.CREATED).body(historialTrabajoService.registrarHistorialTrabajo(procesoTrabajoId));
    }

    @PreAuthorize("hasAuthority('PROPIETARIO')")
    @PutMapping("/editar/{historialTrabajoId}")
    public ResponseEntity<HistorialTrabajoResponseDto> editarHistorialTrabajo(@PathVariable(value = "historialTrabajoId")Long historialTrabajoId, @Valid @RequestBody HistorialUpdateRequestDto historialUpdateRequestDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(historialTrabajoService.editarHistorialTrabajo(historialTrabajoId, historialUpdateRequestDto));
    }
}
