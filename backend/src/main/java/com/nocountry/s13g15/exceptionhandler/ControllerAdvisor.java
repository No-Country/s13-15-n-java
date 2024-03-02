package com.nocountry.s13g15.exceptionhandler;


import com.nocountry.s13g15.exception.NoDataFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ControllerAdvisor {

    private static final String MESSAGE = "message";

    //@ResponseStatus(code = HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidateExceptions(MethodArgumentNotValidException ex){
        Map<String, String> errors = new HashMap<String, String>();
        ex.getBindingResult().getAllErrors().forEach((error) ->{
            String fielName = ((FieldError)error).getField();
            String message = error.getDefaultMessage();

            errors.put(fielName, message);
        });
        return  ResponseEntity.status(HttpStatus.CONFLICT).body(errors);
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleException(Exception exception) {
        System.out.println("llega Excepcion:"+exception.getClass().toString());
        String messageError = "";
        String messageException = "";
        switch (exception.getClass().toString()) {
            case "class com.nocountry.s13g15.exception.UsuarioNoAutenticadoException":
                messageError = "mensaje";
                messageException = "El usuario no esta autenticado.";
                break;
            case "class com.nocountry.s13g15.exception.DataFinalException":
                messageError = "mensaje";
                messageException = "La fecha final no puede ser anterior a la fecha de inicio.";
                break;
            case "class com.nocountry.s13g15.exception.OfertaNoExistenException":
                messageError = "mensaje";
                messageException = "La oferta no se encuentra registrada";
                break;
            case "class com.nocountry.s13g15.exception.SolicitudYaRegistradaException":
                messageError = "mensaje";
                messageException = "Esta solicitud ya esta registrada";
                break;
            case "class com.nocountry.s13g15.exception.JardineroNoExisteException":
                messageError = "mensaje";
                messageException = "El jardinero no existe.";
                break;
            case "class com.nocountry.s13g15.exception.OfertaNoEsMismaCiudadJardineroException":
                messageError = "mensaje";
                messageException = "La oferta publicada no tiene la misma ciudad del jardinero.";
                break;
            case "class com.nocountry.s13g15.exception.OfertaInactivaException":
                messageError = "mensaje";
                messageException = "La oferta se encuentra inactiva.";
                break;
            case "class com.nocountry.s13g15.exception.FechaException":
                messageError = "mensaje";
                messageException = "La fecha de inicio de la oferta ya paso.";
                break;
            case "class com.nocountry.s13g15.exception.InformacionPerfilNoRegistradaException":
                messageError = "mensaje";
                messageException = "El usuario no ha registrado la información del perfil.";
                break;
            case "class com.nocountry.s13g15.exception.UsuarioNoExistenException":
                messageError = "mensaje";
                messageException = "El usuario no existe.";
                break;
            case "class com.nocountry.s13g15.exception.HistorialTrabajoNoExistenException":
                messageError = "mensaje";
                messageException = "El historial de trabajo no existe.";
                break;
            case "class com.nocountry.s13g15.exception.HistorialTrabajoEstaPendienteException":
                messageError = "mensaje";
                messageException = "El historial de trabajo esta con estado 'pendiente'";
                break;
            case "class com.nocountry.s13g15.exception.CiudadNoExisteException":
                messageError = "mensaje";
                messageException = "La ciudad no existe'";
                break;
            default:
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(Collections.singletonMap(exception.getClass().toString(), exception.getMessage()));

        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body(Collections.singletonMap(messageError, messageException));
    }

    @ExceptionHandler(NoDataFoundException.class)
    public ResponseEntity<Map<String, String>> handleNoDataFoundException(
            NoDataFoundException ignoredNoDataFoundException) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Collections.singletonMap(MESSAGE, ExceptionResponse.NO_DATA_FOUND.getMessage()));
    }

}