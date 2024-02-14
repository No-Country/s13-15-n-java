package com.nocountry.s13g15.services;


import com.nocountry.s13g15.dto.request.UsuarioRequestDto;
import com.nocountry.s13g15.dto.response.UsuarioResponseDto;
import com.nocountry.s13g15.entities.Usuario;

import java.util.List;

public interface IUsuarioService {
    UsuarioResponseDto registrarUsuario(UsuarioRequestDto usuarioRequestDto, Long rolPropietario);
    List<Usuario> obtenerUsuarios();

}
