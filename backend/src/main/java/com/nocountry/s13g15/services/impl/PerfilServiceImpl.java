package com.nocountry.s13g15.services.impl;

import com.nocountry.s13g15.dto.request.PerfilRequestDto;
import com.nocountry.s13g15.dto.response.PerfilResponseDto;
import com.nocountry.s13g15.entities.Ciudad;
import com.nocountry.s13g15.entities.Perfil;
import com.nocountry.s13g15.entities.Usuario;
import com.nocountry.s13g15.exception.UsuarioNoExistenException;
import com.nocountry.s13g15.mapper.PerfilRequestToPerfil;
import com.nocountry.s13g15.repositories.CiudadRepository;
import com.nocountry.s13g15.repositories.PerfilRepository;
import com.nocountry.s13g15.repositories.UsuarioRepository;
import com.nocountry.s13g15.services.IPerfilService;
import com.nocountry.s13g15.services.IToken;
import com.nocountry.s13g15.utils.MethodsUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class PerfilServiceImpl implements IPerfilService {

    private final PerfilRepository perfilRepository;
    private final PerfilRequestToPerfil perfilRequestToPerfil;
    private final IToken token;
    private final UsuarioRepository usuarioRepository;
    private final CiudadRepository ciudadRepository;

    @Override
    public PerfilResponseDto crearPerfil(PerfilRequestDto perfilRequestDto) {
        Perfil perfil = perfilRequestToPerfil.toPerfil(perfilRequestDto);
        perfilRepository.save(perfil);

        Long idUsuario = MethodsUtil.getIdUsuarioByToken(token);
        Usuario usuario = usuarioRepository.findById(idUsuario).orElse(null);
        if(usuario==null) throw new UsuarioNoExistenException();
        Ciudad ciudad = ciudadRepository.findById(usuario.getCiudad().getId()).orElseThrow();

        usuario.setPerfil(perfil);
        usuarioRepository.save(usuario);

        return mapearDatos(usuario, perfil, ciudad);
    }

    private PerfilResponseDto mapearDatos(Usuario usuario, Perfil perfil, Ciudad ciudad){
        PerfilResponseDto perfilResponseDto = new PerfilResponseDto();
        perfilResponseDto.setNombre(usuario.getNombre());
        perfilResponseDto.setApellido(usuario.getApellido());
        perfilResponseDto.setCorreo(usuario.getCorreo());
        perfilResponseDto.setCiudad(ciudad);
        perfilResponseDto.setDescripcion(perfil.getDescripcion());
        perfilResponseDto.setExperiencia(perfil.getExperiencia());
        perfilResponseDto.setConocimientos(perfil.getConocimientos());
        return  perfilResponseDto;
    }
}
