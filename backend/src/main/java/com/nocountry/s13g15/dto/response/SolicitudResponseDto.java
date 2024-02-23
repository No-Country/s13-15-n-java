package com.nocountry.s13g15.dto.response;

import com.nocountry.s13g15.entities.Oferta;
import com.nocountry.s13g15.entities.Usuario;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class SolicitudResponseDto {
    private Long id;
    private Date fechaSolicitud;
    private Boolean statusSolicitudActiva;
    private Oferta oferta;
    private Usuario usuario;
}
