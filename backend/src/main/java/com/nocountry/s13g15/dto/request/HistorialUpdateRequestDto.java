package com.nocountry.s13g15.dto.request;

import com.nocountry.s13g15.enums.EstadoTrabajo;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
public class HistorialUpdateRequestDto {
    @NotNull(message = "Debe tener fecha de inicio")
    private Date fechaInicio;

    @NotNull(message = "Debe tener fecha para finalizarlo")
    private Date fechaFin;

    @NotNull(message = "El precio es requerido")
    private Double pagoTotal;

    @NotNull
    private EstadoTrabajo estadoTrabajo;
}
