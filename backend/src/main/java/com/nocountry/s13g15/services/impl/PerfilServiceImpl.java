package com.nocountry.s13g15.services.impl;

import com.nocountry.s13g15.dto.request.PerfilRequestDto;
import com.nocountry.s13g15.dto.request.PerfilUpdateRequestDto;
import com.nocountry.s13g15.dto.response.PerfilResponseDto;
import com.nocountry.s13g15.entities.Ciudad;
import com.nocountry.s13g15.entities.Perfil;
import com.nocountry.s13g15.entities.Usuario;
import com.nocountry.s13g15.exception.CiudadNoExisteException;
import com.nocountry.s13g15.exception.InformacionPerfilNoRegistradaException;
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

    @Override
    public PerfilResponseDto verPerfil() {
        Long idUsuario = MethodsUtil.getIdUsuarioByToken(token);
        Usuario usuario = usuarioRepository.findById(idUsuario).orElse(null);
        if(usuario==null) throw new UsuarioNoExistenException();
        Ciudad ciudad = ciudadRepository.findById(usuario.getCiudad().getId()).orElseThrow();

        if(usuario.getPerfil()==null) {
           return  mapearDatos(usuario, null, ciudad);
        }
        return mapearDatos(usuario, usuario.getPerfil(), ciudad);
    }

    @Override
    public void editarPerfil(PerfilUpdateRequestDto perfilUpdateRequestDto) {
        Long idUsuario = MethodsUtil.getIdUsuarioByToken(token);
        Usuario usuario = usuarioRepository.findById(idUsuario).orElseThrow();
        if(usuario.getPerfil()==null) throw new InformacionPerfilNoRegistradaException();
        usuario.setNombre(perfilUpdateRequestDto.getNombre());
        usuario.setApellido(perfilUpdateRequestDto.getApellido());

        Ciudad ciudad = ciudadRepository.findById(perfilUpdateRequestDto.getCiudadId()).orElse(null);
        if(ciudad==null) throw new CiudadNoExisteException();
        usuario.setCiudad(ciudad);

        Perfil perfil = perfilRepository.findById(usuario.getPerfil().getId()).orElseThrow();
        perfil.setConocimientos(perfilUpdateRequestDto.getConocimientos());
        perfil.setDescripcion(perfilUpdateRequestDto.getDescripcion());
        perfil.setExperiencia(perfilUpdateRequestDto.getExperiencia());

        perfilRepository.save(perfil);
        usuarioRepository.save(usuario);
    }

    private PerfilResponseDto mapearDatos(Usuario usuario, Perfil perfil, Ciudad ciudad){
        PerfilResponseDto perfilResponseDto = new PerfilResponseDto();
        perfilResponseDto.setNombre(usuario.getNombre());
        perfilResponseDto.setApellido(usuario.getApellido());
        perfilResponseDto.setCorreo(usuario.getCorreo());
        perfilResponseDto.setCiudad(ciudad);
        if(perfil!=null) {
            perfilResponseDto.setDescripcion(perfil.getDescripcion());
            perfilResponseDto.setExperiencia(perfil.getExperiencia());
            perfilResponseDto.setConocimientos(perfil.getConocimientos());
        }
        return  perfilResponseDto;
    }
}
