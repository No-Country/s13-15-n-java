package com.nocountry.s13g15.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.*;

@Getter
@Setter
public class CalificacionRequestDto {

    @NotBlank(message = "El puntaje es requerido")
    @Pattern(regexp = "^[1-5]$", message = "El puntaje es un valor entre 1 a 5")
    private String puntaje;

    @NotBlank(message = "El comentario es requerido")
    @Size(min = 2, message = "El comentario debe tener al menos 2 caracteres")
    private String comentario;

    @NotNull(message = "El id del historial de trabajo es requerido")
    @Min(value = 1, message = "El puntaje minimo es 1")
    private Long idHistorialTrabajo;
}
