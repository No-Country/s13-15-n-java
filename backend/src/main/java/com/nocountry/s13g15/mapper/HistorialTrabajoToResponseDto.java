package com.nocountry.s13g15.mapper;

import com.nocountry.s13g15.dto.response.HistorialTrabajoResponseDto;
import com.nocountry.s13g15.entities.HistorialTrabajo;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface HistorialTrabajoToResponseDto {
    HistorialTrabajoResponseDto toResponseDto(HistorialTrabajo historialTrabajo);
}
