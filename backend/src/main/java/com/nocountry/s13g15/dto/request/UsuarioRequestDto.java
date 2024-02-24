package com.nocountry.s13g15.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
public class UsuarioRequestDto {

    @NotBlank(message = "El nombre es requerido")
    @Size(min = 2, message = "El nombre debe tener al menos 2 caracteres")
    private String nombre;

    @NotBlank(message = "El apellido es requerido")
    @Size(min = 2, message = "El apellido debe tener al menos 2 caracteres")
    private String apellido;


    @NotBlank(message = "El correo electrónico es requerido")
    @Email(message = "El correo electrónico debe ser válido")
    private String correo;

    @NotNull(message = "La ciudad es requerida")
    @Min(value = 1)
    private Long ciudadId;

    @NotBlank(message = "La clave es requerida")
    private String clave;

}
