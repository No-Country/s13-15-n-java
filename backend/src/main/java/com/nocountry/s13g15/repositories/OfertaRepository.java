package com.nocountry.s13g15.repositories;

import com.nocountry.s13g15.entities.Oferta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface OfertaRepository extends JpaRepository<Oferta, Long> {
    @Query(nativeQuery = true, value="select o.* from ofertas o join usuarios u ON(o.usuario_id=u.id) " +
            "where u.ciudad_id = :ciudadId and (o.fecha_inicio - INTERVAL '2 hours')  > :fechaActual and o.status_oferta_activa = true " +
            "and o.nombre like %:nombre% and o.grado_complejidad like %:gradoComplejidad%")
    Optional<List<Oferta>> obtenerOfertasPorCiudadYFechaActualAnteriorAInicioAndFiltros(Long ciudadId, Date fechaActual, String nombre, String gradoComplejidad);

}
