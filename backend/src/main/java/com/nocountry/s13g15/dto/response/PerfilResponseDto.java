package com.nocountry.s13g15.dto.response;

import com.nocountry.s13g15.entities.Ciudad;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PerfilResponseDto {

    private String nombre;
    private String apellido;
    private String correo;
    private Ciudad ciudad;
    private String descripcion;
    private Double experiencia;
    private String conocimientos;
    private Long rolId;
}
