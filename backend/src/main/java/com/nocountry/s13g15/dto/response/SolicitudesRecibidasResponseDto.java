package com.nocountry.s13g15.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SolicitudesRecibidasResponseDto {
    private List<SolicitudResponseDto> solicitudes;
}
