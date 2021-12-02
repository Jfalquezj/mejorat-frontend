import React, { useState, useEffect } from "react";
import { DivPerfil, Row1, Row2 } from "./perfilelements";
import Foto from "../../../../lib/ui/vectors/fotopsicologo";
import { getPaciente } from "../../../../services/pacienteServices";
import { useParams } from "react-router";
import { Modal } from "../Modal";

export default function Perfilpsicologo() {
  let { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [patient, setPatient] = useState("");
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
  }, []);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <DivPerfil style={{ marginTop: "20px" }}>
      <Row1>
        <Foto></Foto>
        <h2>{id}</h2>
        <h2>Precio</h2>
      </Row1>
      <Row2>
        <p style={{ marginTop: "20px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </p>
        <div
          style={{
            background: "#1ABC9C",
            height: "60px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
          onClick={openModal}
        >
          Agendar Cita
        </div>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          psicologo_id={id}
          paciente_id={patient.id}
          lugar={patient.preferencia_de_lugar}
        />
      </Row2>
    </DivPerfil>
  );
}
