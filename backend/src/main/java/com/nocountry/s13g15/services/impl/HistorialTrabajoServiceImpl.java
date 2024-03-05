package com.nocountry.s13g15.services.impl;

import com.nocountry.s13g15.dto.request.HistorialUpdateRequestDto;
import com.nocountry.s13g15.dto.response.HistorialTrabajoResponseDto;
import com.nocountry.s13g15.entities.HistorialTrabajo;
import com.nocountry.s13g15.entities.Oferta;
import com.nocountry.s13g15.entities.ProcesoTrabajo;
import com.nocountry.s13g15.enums.EstadoTrabajo;
import com.nocountry.s13g15.exception.HistorialTrabajoNoExistenException;
import com.nocountry.s13g15.exception.HistorialTrabajoYaRegistradoException;
import com.nocountry.s13g15.exception.ProcesoTrabajoNoAprobadoException;
import com.nocountry.s13g15.exception.ProcesoTrabajoNoExistenException;
import com.nocountry.s13g15.mapper.HistorialTrabajoToResponseDto;
import com.nocountry.s13g15.repositories.HistorialTrabajoRepository;
import com.nocountry.s13g15.repositories.OfertaRepository;
import com.nocountry.s13g15.repositories.ProcesoTrabajoRepository;
import com.nocountry.s13g15.services.IHistorialTrabajo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class HistorialTrabajoServiceImpl implements IHistorialTrabajo {

    private final HistorialTrabajoRepository historialTrabajoRepository;
    private final ProcesoTrabajoRepository procesoTrabajoRepository;
    private final OfertaRepository ofertaRepository;
    private final HistorialTrabajoToResponseDto historialTrabajoToResponseDto;

    @Override
    public HistorialTrabajoResponseDto registrarHistorialTrabajo(Long procesoTrabajoId) {
        Optional<ProcesoTrabajo> procesoTrabajoOptional = procesoTrabajoRepository.findById(procesoTrabajoId);
        Boolean existsHistorialTrabajo = historialTrabajoRepository.existsByProcesoTrabajoId(procesoTrabajoId);
        Optional<Oferta> ofertaOptional = ofertaRepository.obtenerOfertaPorProcesoTrabajoId(procesoTrabajoId);

        if(procesoTrabajoOptional.isEmpty()){
            throw new ProcesoTrabajoNoExistenException();
        }

        if(existsHistorialTrabajo){
            throw new HistorialTrabajoYaRegistradoException();
        }

        if(Boolean.FALSE.equals(procesoTrabajoOptional.get().getStatusAprobacionJardinero())){
            throw new ProcesoTrabajoNoAprobadoException();
        }

        HistorialTrabajo historialTrabajo = new HistorialTrabajo();
        historialTrabajo.setFechaInicio(ofertaOptional.get().getFechaInicio());
        historialTrabajo.setFechaFin(ofertaOptional.get().getFechaFin());
        historialTrabajo.setPagoTotal(ofertaOptional.get().getPrecio());
        historialTrabajo.setEstadoTrabajo(String.valueOf(EstadoTrabajo.PENDIENTE));
        historialTrabajo.setProcesoTrabajo(procesoTrabajoOptional.get());

        historialTrabajoRepository.save(historialTrabajo);

        return historialTrabajoToResponseDto.toResponseDto(historialTrabajo);
    }

    @Override
    public HistorialTrabajoResponseDto editarHistorialTrabajo(Long idHistorialTrabajo, HistorialUpdateRequestDto historialUpdateRequestDto) {
        Optional<HistorialTrabajo> historialTrabajoOptional = historialTrabajoRepository.findById(idHistorialTrabajo);

        if(historialTrabajoOptional.isEmpty()){
            throw new HistorialTrabajoNoExistenException();
        }

        HistorialTrabajo historialTrabajo = getHistorialTrabajo(historialUpdateRequestDto, historialTrabajoOptional);

        historialTrabajoRepository.save(historialTrabajo);

        return historialTrabajoToResponseDto.toResponseDto(historialTrabajo);
    }

    private static HistorialTrabajo getHistorialTrabajo(HistorialUpdateRequestDto historialUpdateRequestDto, Optional<HistorialTrabajo> historialTrabajoOptional) {
        HistorialTrabajo historialTrabajo = historialTrabajoOptional.get();
        historialTrabajo.setFechaInicio(historialUpdateRequestDto.getFechaInicio());
        historialTrabajo.setFechaFin(historialUpdateRequestDto.getFechaFin());
        historialTrabajo.setPagoTotal(historialUpdateRequestDto.getPagoTotal());
        historialTrabajo.setEstadoTrabajo(String.valueOf(historialUpdateRequestDto.getEstadoTrabajo()));
        historialTrabajo.setProcesoTrabajo(historialTrabajoOptional.get().getProcesoTrabajo());
        return historialTrabajo;
    }
}
