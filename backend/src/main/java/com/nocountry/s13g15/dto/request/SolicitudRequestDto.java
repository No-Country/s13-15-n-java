package com.nocountry.s13g15.dto.request;

import com.nocountry.s13g15.entities.Oferta;
import com.nocountry.s13g15.entities.Usuario;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.Date;

@Getter
@Setter
public class SolicitudRequestDto {
    @NotBlank(message = "Se requiere una oferta")
    private Long idOferta;
}
