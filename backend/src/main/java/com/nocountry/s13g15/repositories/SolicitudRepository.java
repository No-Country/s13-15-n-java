package com.nocountry.s13g15.repositories;

import com.nocountry.s13g15.entities.Solicitud;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SolicitudRepository  extends JpaRepository<Solicitud, Long> {

    Boolean existsByOfertaIdAndUsuarioId(Long ofertaId, Long usuarioId);
}
