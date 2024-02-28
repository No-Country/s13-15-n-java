package com.nocountry.s13g15.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.*;

@Getter
@Setter
public class CalificacionRequestDto {

    @NotNull(message = "El puntaje es requerido")
    @Min(value = 1, message = "El puntaje minimo es 1")
    @Max(value = 5, message = "El puntaje maximo es 5")
    private Short puntaje;

    @NotBlank(message = "El comentario es requerido")
    @Size(min = 2, message = "El comentario debe tener al menos 2 caracteres")
    private String comentario;

    @NotNull(message = "El id del historial de trabajo es requerido")
    @Min(value = 1, message = "El puntaje minimo es 1")
    private Long idHistorialTrabajo;
}
