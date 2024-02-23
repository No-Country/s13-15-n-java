package com.nocountry.s13g15.services.impl;

import com.nocountry.s13g15.dto.response.SolicitudResponseDto;
import com.nocountry.s13g15.entities.Oferta;
import com.nocountry.s13g15.entities.Solicitud;
import com.nocountry.s13g15.entities.Usuario;
import com.nocountry.s13g15.exception.FechaException;
import com.nocountry.s13g15.exception.InformacionPerfilNoRegistradaException;
import com.nocountry.s13g15.exception.OfertaInactivaException;
import com.nocountry.s13g15.exception.OfertaNoEsMismaCiudadJardineroException;
import com.nocountry.s13g15.exception.OfertaNoExistenException;
import com.nocountry.s13g15.exception.SolicitudYaRegistradaException;
import com.nocountry.s13g15.exception.UsuarioNoExistenException;
import com.nocountry.s13g15.mapper.SolicitudToResponseDto;
import com.nocountry.s13g15.repositories.OfertaRepository;
import com.nocountry.s13g15.repositories.SolicitudRepository;
import com.nocountry.s13g15.repositories.UsuarioRepository;
import com.nocountry.s13g15.services.ISolicitudService;
import com.nocountry.s13g15.services.IToken;
import com.nocountry.s13g15.utils.MethodsUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class SolicitudServiceImpl implements ISolicitudService {

    private final UsuarioRepository usuarioRepository;
    private final SolicitudRepository solicitudRepository;
    private final OfertaRepository ofertaRepository;
    private final SolicitudToResponseDto solicitudToResponseDto;
    private final IToken token;

    @Override
    public SolicitudResponseDto registrarSolicitud(Long ofertaId) {

        Optional<Usuario> usuarioOptional = usuarioRepository.findById(MethodsUtil.getIdUsuarioByToken(token));
        Optional<Oferta> ofertaOptional = ofertaRepository.findById(ofertaId);
        Boolean existsSolicitud = solicitudRepository.existsByOfertaIdAndUsuarioId(ofertaId, MethodsUtil.getIdUsuarioByToken(token));

        if(usuarioOptional.isEmpty()){
            throw new UsuarioNoExistenException();
        }

        if(ofertaOptional.isEmpty()){
            throw new OfertaNoExistenException();
        }

        if(Boolean.TRUE.equals(existsSolicitud)){
            throw new SolicitudYaRegistradaException();
        }

        if(usuarioOptional.get().getPerfil()==null) throw new InformacionPerfilNoRegistradaException();

            Date fechaActual = Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant());
        if(ofertaOptional.get().getStatusOfertaActiva().equals(false)) throw new OfertaInactivaException();
        if(fechaActual.after(ofertaOptional.get().getFechaInicio())) throw new FechaException();
        if(!Objects.equals(ofertaOptional.get().getUsuario().getCiudad().getId(), usuarioOptional.get().getCiudad().getId())) throw new OfertaNoEsMismaCiudadJardineroException();



        Solicitud solicitud = new Solicitud();
        solicitud.setFechaSolicitud(fechaActual);
        solicitud.setStatusSolicitudActiva(true);
        solicitud.setUsuario(usuarioOptional.get());
        solicitud.setOferta(ofertaOptional.get());

        solicitudRepository.save(solicitud);

        return solicitudToResponseDto.toResponseDto(solicitud);

    }
}
