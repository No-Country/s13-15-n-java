package com.nocountry.s13g15.services.impl;

import com.nocountry.s13g15.entities.Rol;
import com.nocountry.s13g15.exception.RolNoExistenException;
import com.nocountry.s13g15.repositories.RolRepository;
import com.nocountry.s13g15.services.IRolService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class RolServiceImpl implements IRolService {
    private final RolRepository rolRepository;
    @Override
    public List<Rol> obtenerRoles() {
        List<Rol> roles= rolRepository.findAll();
        if(roles.isEmpty()) throw new RolNoExistenException();
        return roles;
    }
}
