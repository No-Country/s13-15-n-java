package com.nocountry.s13g15.services;


import com.nocountry.s13g15.dto.request.OfertaRequestDto;
import com.nocountry.s13g15.dto.response.OfertaResponseDto;
import com.nocountry.s13g15.entities.Oferta;

import java.util.List;


public interface IOfertaService {

    OfertaResponseDto publicarOferta(OfertaRequestDto ofertaRequestDto);

    List<Oferta> obtenerOfertas();




}


