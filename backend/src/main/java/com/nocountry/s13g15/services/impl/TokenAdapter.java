package com.nocountry.s13g15.services.impl;


import com.nocountry.s13g15.exception.NoDataFoundException;
import com.nocountry.s13g15.security.TokenUtils;
import com.nocountry.s13g15.services.IToken;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Service
@RequiredArgsConstructor
@Transactional
public class TokenAdapter implements IToken {

    private final TokenUtils tokenUtils;
    @Override
    public String getBearerToken() {
        return ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest().getHeader("Authorization");
    }

    @Override
    public String getCorreo(String token) {
        if(token==(null)) throw  new NoDataFoundException();
        return tokenUtils.getCorreo(token.replace("Bearer ",""));
    }

    @Override
    public Long getUsuarioAutenticadoId(String token) {
        if(token==(null)) throw  new NoDataFoundException();
        return tokenUtils.getUsuarioAutenticadoId(token.replace("Bearer ",""));
    }

    @Override
    public String getUsuarioAutenticadoRol(String token) {
        if(token==(null)) throw  new NoDataFoundException();
        return tokenUtils.getUsuarioAutenticadoRol(token.replace("Bearer ",""));
    }
}
