import React from "react";
import {
  DivTarjeta,
  DivInfo,
  DivFoto,
  Precio,
  DivInfoBorder,
} from "./tarjetacitaelements";
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
    role,
  } = props;

  let user = localStorage.getItem("user");

  const roleButton = () => {
    try {
      const jsonUser = user && JSON.parse(user);
      const role = jsonUser?.role;
      if (role === "Psicologo") {
        return (
          <div onClick={() => confirmarCita(id)}>
            <Button text="Confirmar" primary fluid />
          </div>
        );
      } else if (role === "Paciente") {
        return <p>Espera a confirmar..</p>;
      }
    } catch (e) {
      console.log("error", e);
      const role = user?.role;
      if (role === "Psicologo") {
        return (
          <Button onClick={confirmarCita(id)} text="Confirmar" primary fluid />
        );
      } else if (role === "Paciente") {
        return <p>Espera a confirmar..</p>;
      }
    }
  };
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
        {roleButton()}
      </Precio>
    </DivTarjeta>
  );
}
