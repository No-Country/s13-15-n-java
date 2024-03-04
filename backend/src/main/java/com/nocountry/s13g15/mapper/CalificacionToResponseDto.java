package com.nocountry.s13g15.mapper;

import com.nocountry.s13g15.dto.response.CalificacionResponseDto;
import com.nocountry.s13g15.entities.Calificacion;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface CalificacionToResponseDto {
    CalificacionResponseDto toResponseDto(Calificacion calificacion);
}
