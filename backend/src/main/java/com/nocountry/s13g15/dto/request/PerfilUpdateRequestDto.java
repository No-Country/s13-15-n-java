package com.nocountry.s13g15.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
public class PerfilUpdateRequestDto {

    @NotBlank(message = "El nombre es requerido")
    @Size(min = 2, message = "El nombre debe tener al menos 2 caracteres")
    private String nombre;

    @NotBlank(message = "El apellido es requerido")
    @Size(min = 2, message = "El apellido debe tener al menos 2 caracteres")
    private String apellido;

    @NotNull(message = "La ciudad es requerida")
    @Min(value = 1)
    private Long ciudadId;

    @NotBlank(message = "La descripcion es requerida")
    private String descripcion;

    @NotNull(message = "La experiencia en meses o años es requerida")
    @Min(value = 0)
    private Double experiencia;

    @NotBlank(message = "Los conocimientos son requeridos")
    private String conocimientos;
}
