package com.nocountry.s13g15.security;


import com.nocountry.s13g15.repositories.UsuarioRepository;
import com.nocountry.s13g15.entities.Usuario;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {


    private final UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByCorreo(email).orElseThrow(()->new UsernameNotFoundException("El usuario con email "+email+" no existe."));
        return new UserDetailsImpl(usuario);
    }
}
