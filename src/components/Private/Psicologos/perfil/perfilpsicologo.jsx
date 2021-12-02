import React, { useState, useEffect } from "react";
import { DivPerfil, Row1, Row2, PrecioColumn } from "./perfilelements";
import Foto from "../../../../lib/ui/vectors/fotopsicologo";
import { getPaciente } from "../../../../services/pacienteServices";
import { getPsicologo } from "../../../../services/psicologoServices";
import { useParams } from "react-router";
import { Modal } from "../Modal";
import Button from "../../../common/Button";

export default function Perfilpsicologo() {
  let { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [patient, setPatient] = useState("");
  const [psicologo, setPsicologo] = useState("");
  let user = localStorage.getItem("user");

  const getUserId = () => {
    try {
      const jsonUser = user && JSON.parse(user);
      const ID = jsonUser?.userId;
      return ID;
    } catch (e) {
      console.log("error", e);
      const ID = user?.userId;
      return ID;
    }
  };

  useEffect(() => {
    const ID = getUserId();
    getPaciente(ID)
      .then((data) => {
        if (data.paciente) {
          setPatient(data.paciente);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
    getPsicologo(id)
      .then((data) => {
        if (data.paciente) {
          console.log("data.psicologo", data.paciente);
          setPsicologo(data.paciente);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <DivPerfil style={{ marginTop: "20px" }}>
      <Row1>
        <Foto></Foto>
        <h2>{psicologo?.User?.name}</h2>
        <PrecioColumn>
          <h2>Precio</h2>
          <p>{psicologo?.tarifa_por_hora}/h $</p>
        </PrecioColumn>
      </Row1>
      <Row2 style={{ display: "flex" }}>
        <p style={{ marginTop: "20px" }}>
          Especialización: {psicologo?.especializacion}
        </p>
        <p style={{ marginTop: "20px" }}>
          Calificación: {psicologo?.calificacion}
        </p>
        <div style={{ width: "30%" }}>
          <Button onClick={openModal} text="Agendar Cita" primary fluid />
        </div>

        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          psicologo_id={psicologo?.id}
          paciente_id={patient.id}
          lugar={patient.preferencia_de_lugar}
        />
      </Row2>
    </DivPerfil>
  );
}
