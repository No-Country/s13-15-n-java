package com.nocountry.s13g15.dto.response;

import com.nocountry.s13g15.entities.ProcesoTrabajo;
import lombok.Getter;
import lombok.Setter;
import java.util.Date;

@Getter
@Setter
public class HistorialTrabajoResponseDto {
    private Date fechaInicio;
    private Date fechaFin;
    private Double pagoTotal;
    private String estadoTrabajo;
    private ProcesoTrabajo procesoTrabajo;
}
