package com.nocountry.s13g15.mapper;

import com.nocountry.s13g15.dto.response.OfertaResponseDto;
import com.nocountry.s13g15.entities.Oferta;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface OfertaToResponseDto {

    OfertaResponseDto map(Oferta oferta);
}
