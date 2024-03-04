package com.nocountry.s13g15.services;

import com.nocountry.s13g15.dto.request.HistorialUpdateRequestDto;
import com.nocountry.s13g15.dto.response.HistorialTrabajoResponseDto;

public interface IHistorialTrabajo {

    HistorialTrabajoResponseDto registrarHistorialTrabajo(Long procesoTrabajoId);

    HistorialTrabajoResponseDto editarHistorialTrabajo(Long idHistorialTrabajo, HistorialUpdateRequestDto historialUpdateRequestDto);
}
