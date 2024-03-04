package com.nocountry.s13g15.services;

import com.nocountry.s13g15.dto.request.CalificacionRequestDto;
import com.nocountry.s13g15.dto.response.CalificacionResponseDto;

public interface ICalificacionService {

    CalificacionResponseDto registrarCalificacion(CalificacionRequestDto calificacionRequestDto);

}
