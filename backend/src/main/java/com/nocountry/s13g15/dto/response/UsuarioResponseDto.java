package com.nocountry.s13g15.dto.response;

import com.nocountry.s13g15.entities.Rol;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UsuarioResponseDto {
    private Long id;
    private String nombre;
    private String apellido;
    private String correo;
    private String clave;
    private Date fechaRegistro;
    private Rol rol;
}
