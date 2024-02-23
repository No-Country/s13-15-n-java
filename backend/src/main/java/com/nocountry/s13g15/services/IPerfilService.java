package com.nocountry.s13g15.services;

import com.nocountry.s13g15.dto.request.PerfilRequestDto;
import com.nocountry.s13g15.dto.response.PerfilResponseDto;

public interface IPerfilService {

    PerfilResponseDto crearPerfil(PerfilRequestDto perfilRequestDto);

    PerfilResponseDto verPerfil();

}
