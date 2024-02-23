package com.nocountry.s13g15.services.impl;

import com.nocountry.s13g15.dto.request.SolicitudRequestDto;
import com.nocountry.s13g15.dto.response.SolicitudResponseDto;
import com.nocountry.s13g15.entities.Oferta;
import com.nocountry.s13g15.entities.Solicitud;
import com.nocountry.s13g15.entities.Usuario;
import com.nocountry.s13g15.exception.OfertaNoExistenException;
import com.nocountry.s13g15.exception.SolicitudYaRegistradaException;
import com.nocountry.s13g15.exception.UsuarioNoExistenException;
import com.nocountry.s13g15.mapper.SolicitudRequestToSolicitud;
import com.nocountry.s13g15.mapper.SolicitudToResponseDto;
import com.nocountry.s13g15.repositories.OfertaRepository;
import com.nocountry.s13g15.repositories.SolicitudRepository;
import com.nocountry.s13g15.repositories.UsuarioRepository;
import com.nocountry.s13g15.services.ISolicitudService;
import com.nocountry.s13g15.utils.MethodsUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class SolicitudServiceImpl implements ISolicitudService {

    @Autowired
    private final UsuarioRepository usuarioRepository;

    @Autowired
    private final SolicitudRepository solicitudRepository;

    @Autowired
    private final OfertaRepository ofertaRepository;

    @Autowired
    private final SolicitudToResponseDto solicitudToResponseDto;

    @Autowired
    private final SolicitudRequestToSolicitud solicitudRequestToSolicitud;

    @Autowired
    private final TokenAdapter token;

    @Override
    public SolicitudResponseDto registrarSolicitud(SolicitudRequestDto solicitudRequestDto) {

        Optional<Usuario> usuarioOptional = usuarioRepository.findById(MethodsUtil.getIdUsuarioByToken(token));
        Optional<Oferta> ofertaOptional = ofertaRepository.findById(solicitudRequestDto.getIdOferta());
        Boolean existsSolicitud = solicitudRepository.existsByOfertaIdAndUsuarioId(solicitudRequestDto.getIdOferta(), MethodsUtil.getIdUsuarioByToken(token));

        if(usuarioOptional.isEmpty()){
            throw new UsuarioNoExistenException();
        }

        if(ofertaOptional.isEmpty()){
            throw new OfertaNoExistenException();
        }

        if(Boolean.TRUE.equals(existsSolicitud)){
            throw new SolicitudYaRegistradaException();
        }

        Solicitud solicitud = solicitudRequestToSolicitud.toSolicitud(solicitudRequestDto);
        solicitud.setFechaSolicitud(Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant()));
        solicitud.setStatusSolicitudActiva(true);
        solicitud.setUsuario(usuarioOptional.get());
        solicitud.setOferta(ofertaOptional.get());

        solicitudRepository.save(solicitud);

        return solicitudToResponseDto.toResponseDto(solicitud);

    }
}
