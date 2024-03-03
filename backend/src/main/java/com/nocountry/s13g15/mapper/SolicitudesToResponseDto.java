package com.nocountry.s13g15.mapper;

import com.nocountry.s13g15.dto.response.OfertaResponseDto;
import com.nocountry.s13g15.dto.response.SolicitudResponseDto;
import com.nocountry.s13g15.entities.Oferta;
import com.nocountry.s13g15.entities.Solicitud;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface SolicitudesToResponseDto {

    List<SolicitudResponseDto> toResponseList(List<Solicitud> solicitudes);
}
