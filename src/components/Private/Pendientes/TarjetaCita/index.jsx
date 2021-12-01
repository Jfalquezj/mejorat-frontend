import React from "react";
import { DivTarjeta, DivInfo, DivFoto, Precio, DivInfoBorder } from "./tarjetacitaelements";
import { confirmarCita } from "../../../../services/citaServices";
import Foto from "../../../../lib/ui/vectors/fotopsicologo";
import Button from "../../../common/Button";

export default function TarjetaCita(props) {
  const {
    id,
    fecha,
    paciente_id,
    duracion,
    descripcion,
    estado,
    lugar,
    role
  } = props;
  return (
    <DivTarjeta>
      <DivFoto>
        <h4>
          <Foto />
        </h4>
      </DivFoto>
      <DivInfo>
        <h4>Cita {id}</h4>
        Id paciente: <p>{paciente_id}</p>
        Estado: <p>{estado}</p>
      </DivInfo>
      <DivInfoBorder>
      <p>Descripción:</p>
      <p>{descripcion}</p>
      </DivInfoBorder>
      <Precio>
        <p>Lugar: {lugar}</p>
        <Button text="Confirmar" primary fluid/>
      </Precio>
    </DivTarjeta>
  );
}
