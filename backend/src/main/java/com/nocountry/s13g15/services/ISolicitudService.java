package com.nocountry.s13g15.services;

import com.nocountry.s13g15.dto.response.SolicitudResponseDto;

public interface ISolicitudService {

     SolicitudResponseDto registrarSolicitud(Long ofertaId);

}
