package com.nocountry.s13g15.mapper;

import com.nocountry.s13g15.dto.request.PerfilRequestDto;
import com.nocountry.s13g15.entities.Perfil;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface PerfilRequestToPerfil {

    Perfil toPerfil(PerfilRequestDto perfilRequestDto);
}
