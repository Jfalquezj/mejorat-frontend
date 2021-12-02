import React from "react";
import { useState } from "react";
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
import { HistorialModal } from "./historialModal";

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

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  let user = localStorage.getItem("user");

  const roleButton = () => {
    try {
      const jsonUser = user && JSON.parse(user);
      const role = jsonUser?.role;
      if (role === "Psicologo") {
        return <p>Completada</p>;
      } else if (role === "Paciente") {
        return (
          <div>
            <Button onClick={openModal} text="Ver más" primary fluid />
            <HistorialModal
              showModal={showModal}
              setShowModal={setShowModal}
              descripcion={descripcion}
            />
          </div>
        );
      }
    } catch (e) {
      console.log("error", e);
      const role = user?.role;
      if (role === "Psicologo") {
        return <p>Completada</p>;
      } else if (role === "Paciente") {
        return <Button text="Ver más" primary fluid />;
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
        <p>Duracion:</p>
        <p>{duracion}</p>
      </DivInfoBorder>
      <Precio>
        <p>Lugar: {lugar}</p>
        {roleButton()}
      </Precio>
    </DivTarjeta>
  );
}
