package com.nocountry.s13g15.repositories;

import com.nocountry.s13g15.entities.HistorialTrabajo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistorialTrabajoRepository extends JpaRepository<HistorialTrabajo, Long> {

    Boolean existsByProcesoTrabajoId(Long procesoTrabajoId);

}
