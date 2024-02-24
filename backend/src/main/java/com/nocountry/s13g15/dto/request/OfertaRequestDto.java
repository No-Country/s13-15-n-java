package com.nocountry.s13g15.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.*;
import java.util.Date;

@Getter
@Setter
public class OfertaRequestDto {

    @NotBlank(message = "El nombre de la oferta es requerido")
    @Size(min = 2, message = "El nombre debe tener al menos 2 caracteres")
    private String nombre;

    @NotBlank(message = "La descripcion es requerido")
    @Size(min = 2, message = "La descripcion debe tener al menos 2 caracteres")
    private String descripcion;

    @NotBlank(message = "El grado de complejidad es requerido")
    @NotEmpty(message = "Debe ser seleccionado el grado de complejidad")
    private String gradoComplejidad;

    @NotNull(message = "Debe tener fecha de inicio")
    private Date fechaInicio;

    //agregado - actualizar
    @NotNull(message = "Debe tener fecha para finalizarlo")
    private Date fechaFin;

    @NotBlank(message = "La foto es requerida")
    @Size(max = 542, min = 2)
    private String fotoOferta;

    @NotNull(message = "La direccion es requerida")
    @Size(min = 2)
    private String direccion;

    private boolean statusOfertaActiva;

    @NotBlank(message = "El precio es requerido")
    private String precio;


}
