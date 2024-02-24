package com.nocountry.s13g15.dto.response;

import com.nocountry.s13g15.entities.Ciudad;
import com.nocountry.s13g15.entities.Perfil;
import com.nocountry.s13g15.entities.Rol;
import com.nocountry.s13g15.entities.Usuario;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class OfertaResponseDto {

    private String id;
    private String nombre;
    private String descripcion;
    private String gradoComplejidad;
    private Date fechaInicio;
    private Date fechaFin;
    private String fotoOferta;
    private Boolean statusOfertaActiva;
    private Double precio;
    private Usuario usuario;

}
