import React from 'react'
import {DivTarjeta,DivInfo,DivFoto,Precio} from './tarjetaelements'
import Foto from '../../../../lib/ui/vectors/fotopsicologo'

export default function Tarjetaelements(props) {
    const {
        id,
        calificacion,
        tarifa_por_hora,
      } = props;
    return (
            <DivTarjeta>
                <DivFoto>
                <h4><Foto /></h4>
                </DivFoto>
                <DivInfo>
                <h4>Psicólogo {id}</h4>
                <p>{calificacion}</p>
                </DivInfo>
                <Precio>
                <p>{tarifa_por_hora}$/H</p>
                </Precio>
            </DivTarjeta>
    )
}