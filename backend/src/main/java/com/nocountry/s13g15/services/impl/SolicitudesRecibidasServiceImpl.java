package com.nocountry.s13g15.services.impl;

import com.nocountry.s13g15.dto.response.SolicitudResponseDto;
import com.nocountry.s13g15.dto.response.SolicitudesRecibidasResponseDto;
import com.nocountry.s13g15.entities.Solicitud;
import com.nocountry.s13g15.exception.UsuarioNoExistenException;
import com.nocountry.s13g15.mapper.SolicitudesToResponseDto;
import com.nocountry.s13g15.repositories.SolicitudRepository;
import com.nocountry.s13g15.services.ISolicitudesRecibidas;
import com.nocountry.s13g15.services.IToken;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class SolicitudesRecibidasServiceImpl implements ISolicitudesRecibidas {

    private final SolicitudRepository solicitudRepository;
    private final IToken token;
    private final SolicitudesToResponseDto solicitudesToResponse;

    @Override
    public SolicitudesRecibidasResponseDto solicitudesRecibidas(Long ofertaId) {
        String tokenBearer = token.getBearerToken();
        if(tokenBearer== null) throw new UsuarioNoExistenException();


        List<Solicitud> solicitudesPorOferta = solicitudRepository.findAllByOfertaId(ofertaId);
        List<SolicitudResponseDto> solicitudes = solicitudesToResponse.toResponseList(solicitudesPorOferta);

        SolicitudesRecibidasResponseDto solicitudesResponseDto = new SolicitudesRecibidasResponseDto();
        solicitudesResponseDto.setSolicitudes(solicitudes);
        return solicitudesResponseDto;

    }
}
