package com.nocountry.s13g15.services.impl;

import com.nocountry.s13g15.dto.request.UsuarioRequestDto;
import com.nocountry.s13g15.dto.response.UsuarioResponseDto;
import com.nocountry.s13g15.entities.Ciudad;
import com.nocountry.s13g15.entities.Rol;
import com.nocountry.s13g15.entities.Usuario;
import com.nocountry.s13g15.exception.UsuarioNoExistenException;
import com.nocountry.s13g15.mapper.UsuarioRequestToUsuario;
import com.nocountry.s13g15.mapper.UsuarioToReponseDto;
import com.nocountry.s13g15.repositories.CiudadRepository;
import com.nocountry.s13g15.repositories.RolRepository;
import com.nocountry.s13g15.repositories.UsuarioRepository;
import com.nocountry.s13g15.services.IUsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;


@Service
@RequiredArgsConstructor
@Transactional
public class UsuarioServiceImpl implements IUsuarioService {
    private final UsuarioToReponseDto usuarioToReponseDto;
    private final UsuarioRequestToUsuario usuarioRequestToUsuario;
    private final UsuarioRepository usuarioRepository;
    private final RolRepository rolRepository;
    private final CiudadRepository ciudadRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public UsuarioResponseDto registrarUsuario(UsuarioRequestDto usuarioRequestDto) {
        Usuario usuario = usuarioRequestToUsuario.toUsuario(usuarioRequestDto);
        usuario.setFechaRegistro(Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant()));
        usuario.setClave(passwordEncoder.encode(usuarioRequestDto.getClave()));



        Rol rolAprendiz = rolRepository.findById(1L).orElse(null);
        usuario.setRol(rolAprendiz);

        Ciudad ciudad = ciudadRepository.findById(usuarioRequestDto.getCiudadId()).orElse(null);
        usuario.setCiudad(ciudad);

        usuarioRepository.save(usuario);


        return usuarioToReponseDto.toRespondeDto(usuario);

    }
    public List<Usuario> obtenerUsuarios() {
        List<Usuario> usuarios= usuarioRepository.findAll();
        if(usuarios.isEmpty()) throw new UsuarioNoExistenException();
        return usuarios;
    }

}

