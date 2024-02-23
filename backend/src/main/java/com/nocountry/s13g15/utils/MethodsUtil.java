package com.nocountry.s13g15.utils;

import com.nocountry.s13g15.exception.UsuarioNoExistenException;
import com.nocountry.s13g15.services.impl.TokenAdapter;

public class MethodsUtil {
    public static Long getIdUsuarioByToken(TokenAdapter token){
        String tokenBearer = token.getBearerToken();
        if (tokenBearer == null) throw new UsuarioNoExistenException();
        return token.getUsuarioAutenticadoId(tokenBearer);
    }
}
