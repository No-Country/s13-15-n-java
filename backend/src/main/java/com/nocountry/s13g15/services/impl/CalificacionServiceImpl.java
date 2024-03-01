package com.nocountry.s13g15.services.impl;

import com.nocountry.s13g15.dto.request.CalificacionRequestDto;
import com.nocountry.s13g15.dto.response.CalificacionResponseDto;
import com.nocountry.s13g15.entities.Calificacion;
import com.nocountry.s13g15.entities.HistorialTrabajo;
import com.nocountry.s13g15.exception.HistorialTrabajoNoExistenException;
import com.nocountry.s13g15.exception.HistorialTrabajoEstaPendienteException;
import com.nocountry.s13g15.mapper.CalificacionToResponseDto;
import com.nocountry.s13g15.repositories.CalificacionRepository;
import com.nocountry.s13g15.repositories.HistorialTrabajoRepository;
import com.nocountry.s13g15.services.ICalificacionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class CalificacionServiceImpl implements ICalificacionService {

    private final CalificacionRepository calificacionRepository;
    private final HistorialTrabajoRepository historialTrabajoRepository;
    private final CalificacionToResponseDto calificacionToResponseDto;

    @Override
    public CalificacionResponseDto registrarCalificacion(CalificacionRequestDto calificacionRequestDto) {
        Optional<HistorialTrabajo> historialTrabajoOptional = historialTrabajoRepository.findById(calificacionRequestDto.getIdHistorialTrabajo());

        if(historialTrabajoOptional.isEmpty()){
            throw new HistorialTrabajoNoExistenException();
        }

        if(historialTrabajoOptional.get().getEstadoTrabajo().equals("PENDIENTE")){
            throw new HistorialTrabajoEstaPendienteException();
        }

        Calificacion calificacion = new Calificacion();
        calificacion.setPuntaje(calificacionRequestDto.getPuntaje());
        calificacion.setComentario(calificacionRequestDto.getComentario());
        calificacion.setHistorialTrabajo(historialTrabajoOptional.get());

        calificacionRepository.save(calificacion);

        return calificacionToResponseDto.toResponseDto(calificacion);
    }
}
