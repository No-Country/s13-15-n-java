package com.nocountry.s13g15.services;

import com.nocountry.s13g15.dto.response.SolicitudResponseDto;
import com.nocountry.s13g15.dto.response.SolicitudesRecibidasResponseDto;

public interface ISolicitudesRecibidas {

    SolicitudesRecibidasResponseDto solicitudesRecibidas(Long ofertaId);

}
