package com.nocountry.s13g15.services;

import com.nocountry.s13g15.dto.request.SolicitudRequestDto;
import com.nocountry.s13g15.dto.response.SolicitudResponseDto;

public interface ISolicitudService {

    public SolicitudResponseDto registrarSolicitud(SolicitudRequestDto solicitudRequestDto);

}
