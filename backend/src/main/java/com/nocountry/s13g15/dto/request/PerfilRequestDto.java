package com.nocountry.s13g15.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class PerfilRequestDto {

    @NotBlank(message = "La descripcion es requerida")
    private String descripcion;
    @NotNull(message = "La experiencia en meses o años es requerida")
    @Min(value = 0)
    private Double experiencia;
    @NotBlank(message = "Los conocimientos son requeridos")
    private String conocimientos;
}
