package com.nocountry.s13g15.dto.response;

import com.nocountry.s13g15.entities.HistorialTrabajo;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class CalificacionResponseDto {

    private Long id;
    private String puntaje;
    private String comentario;
    private HistorialTrabajo historialTrabajo;

}
