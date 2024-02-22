package com.nocountry.s13g15.services.impl;

import com.nocountry.s13g15.dto.request.OfertaRequestDto;
import com.nocountry.s13g15.dto.response.OfertaResponseDto;
import com.nocountry.s13g15.entities.Oferta;
import com.nocountry.s13g15.entities.Usuario;
import com.nocountry.s13g15.exception.DataFinalException;
import com.nocountry.s13g15.exception.UsuarioNoExistenException;
import com.nocountry.s13g15.mapper.OfertaRequestToOferta;
import com.nocountry.s13g15.repositories.OfertaRepository;
import com.nocountry.s13g15.repositories.UsuarioRepository;
import com.nocountry.s13g15.services.IOfertaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Service
@RequiredArgsConstructor
@Transactional
public class OfertaServiceImpl implements IOfertaService {

    private final OfertaRequestToOferta ofertaRequestToOferta;
    private final com.nocountry.s13g15.mapper.OfertaToResponseDto OfertaToResponseDto;
    private final OfertaRepository ofertaRepository;
    private final UsuarioRepository usuarioRepository;
    private final TokenAdapter token;

    @Override
    public OfertaResponseDto publicarOferta(OfertaRequestDto ofertaRequestDto) {
        Oferta oferta = ofertaRequestToOferta.map(ofertaRequestDto); // Mapeamento da DTO para entidade

        String tokenBearer = token.getBearerToken();
        if (tokenBearer == null) throw new UsuarioNoExistenException();
        Long idUsuario = token.getUsuarioAutenticadoId(tokenBearer);

        Optional<Usuario> usuario = usuarioRepository.findById(idUsuario);
        if (!usuario.isPresent()) throw new UsuarioNoExistenException();
        oferta.setUsuario(usuarioRepository.findById(idUsuario).orElseThrow());
        if (oferta.getFechaFin().after(oferta.getFechaInicio())) {
            oferta.setStatusOfertaActiva(true);
        }else {
            throw new DataFinalException();
        }
        ofertaRepository.save(oferta);
        OfertaResponseDto ofertaResponseDto = OfertaToResponseDto.map(oferta);
        return ofertaResponseDto;


    }


}




