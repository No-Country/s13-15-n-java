package com.nocountry.s13g15.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@Entity
@Table(name = "historial_trabajos")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class HistorialTrabajo {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fecha_inicio")
    private Date fechaInicio;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fecha_fin")
    private Date fechaFin;

    @Column(name = "pago_total")
    private Double pagoTotal;

    @Column(name = "estado_trabajo")
    private String estadoTrabajo;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "proceso_trabajo_id", nullable = false)
    private ProcesoTrabajo procesoTrabajo;
}
