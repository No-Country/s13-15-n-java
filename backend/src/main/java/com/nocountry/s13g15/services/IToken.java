package com.nocountry.s13g15.services;

public interface IToken {
    String getBearerToken();

    String getCorreo(String token);

    Long getUsuarioAutenticadoId(String token);

    String getUsuarioAutenticadoRol(String token);
}
