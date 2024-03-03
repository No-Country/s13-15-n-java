package com.nocountry.s13g15.services.impl;

import com.nocountry.s13g15.dto.request.OfertaRequestDto;
import com.nocountry.s13g15.dto.response.OfertaResponseDto;
import com.nocountry.s13g15.entities.Ciudad;
import com.nocountry.s13g15.entities.Oferta;
import com.nocountry.s13g15.entities.Usuario;
import com.nocountry.s13g15.exception.DataFinalException;
import com.nocountry.s13g15.exception.JardineroNoExisteException;
import com.nocountry.s13g15.exception.UsuarioNoExistenException;
import com.nocountry.s13g15.mapper.OfertaRequestToOferta;
import com.nocountry.s13g15.mapper.OfertaToResponseDto;
import com.nocountry.s13g15.repositories.OfertaRepository;
import com.nocountry.s13g15.repositories.UsuarioRepository;
import com.nocountry.s13g15.services.IOfertaService;
import com.nocountry.s13g15.services.IToken;
import com.nocountry.s13g15.utils.MethodsUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
@Transactional
public class OfertaServiceImpl implements IOfertaService {

    private final OfertaRequestToOferta ofertaRequestToOferta;
    private final com.nocountry.s13g15.mapper.OfertaToResponseDto OfertaToResponseDto;
    private final OfertaRepository ofertaRepository;
    private final UsuarioRepository usuarioRepository;
    private final IToken token;

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

    @Override
    public List<Oferta> filtrarOfertas(String nombre, String gradoComplejidad) {
        Long jardineroId = MethodsUtil.getIdUsuarioByToken(token);
        Usuario usuario= usuarioRepository.findById(jardineroId).orElse(null);
        if(usuario==null) throw new JardineroNoExisteException();
        Date fechaActual = Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant());
        Long ciudadId = usuario.getCiudad().getId();

        return ofertaRepository.obtenerOfertasPorCiudadYFechaActualAnteriorAInicioAndFiltros(ciudadId, fechaActual,nombre, gradoComplejidad).orElseThrow();
    }


}




