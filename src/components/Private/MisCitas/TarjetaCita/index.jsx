import React from "react";
import { DivTarjeta, DivInfo, DivFoto, Precio } from "./tarjetacitaelements";
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
      <Precio>
        <p>{descripcion}</p>
        <Button onClick={confirmarCita(id)} text="Completar" primary fluid/>
      </Precio>
    </DivTarjeta>
  );
}
