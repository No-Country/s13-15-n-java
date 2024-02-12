package com.nocountry.s13g15.mapper;

import com.nocountry.s13g15.dto.request.UsuarioRequestDto;
import com.nocountry.s13g15.entities.Usuario;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE)

public interface UsuarioRequestToUsuario {

 Usuario toUsuario(UsuarioRequestDto usuarioRequestDto);
}
