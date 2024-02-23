package com.nocountry.s13g15.mapper;

import com.nocountry.s13g15.dto.response.SolicitudResponseDto;
import com.nocountry.s13g15.entities.Solicitud;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface SolicitudToResponseDto {
    SolicitudResponseDto toResponseDto(Solicitud solicitud);
}
