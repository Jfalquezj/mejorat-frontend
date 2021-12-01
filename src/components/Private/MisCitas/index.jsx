import React from "react";
import {
  getCitasConfirmadasByPaciente,
  getCitasConfirmadasByPsicologo,
} from "../../../services/citaServices";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import TarjetaCita from "./TarjetaCita/index";
import { AuthContext } from "../../../context/AuthContext";
import { getPaciente } from "../../../services/pacienteServices";
import { getPsicologo } from "../../../services/psicologoServices";

export default function MisCitas() {
  const [citas, setCitas] = useState([]);
  const { user } = useContext(AuthContext);

  const getUserId = () => {
    try {
      const jsonUser = user && JSON.parse(user);
      const ID = jsonUser?.userId;
      return ID;
    } catch (e) {
      //console.log("error", e);
      const ID = user?.userId;
      return ID;
    }
  };

  const getRole = () => {
    try {
      const jsonUser = user && JSON.parse(user);
      const role = jsonUser?.role;
      return role;
    } catch (e) {
      //console.log("error", e);
      const role = user?.role;
      return role;
    }
  };

  useEffect(() => {
    const ID = getUserId();
    const role = getRole();
    if (role === "Paciente") {
      getPaciente(ID)
        .then((data) => {
          if (data.paciente) {
            getCitasConfirmadasByPaciente(data.paciente.id).then((data) => {
              console.log("data", data);
              const elem = data.map((cita) => {
                return (
                  <Link
                    to={`/cita/${cita.cita_id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <TarjetaCita
                      key={cita.cita_id}
                      id={cita.cita_id}
                      fecha={cita.fecha}
                      paciente_id={cita.paciente_id}
                      duracion={cita.duracion}
                      descripcion={cita.descripcion}
                      estado={cita.estado}
                      lugar={cita.lugar}
                      role={role}
                    />
                  </Link>
                );
              });
              setCitas(elem);
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }

    if (role === "Psicologo") {
      getPsicologo(ID)
        .then((data) => {
          if (data.paciente) {
            getCitasConfirmadasByPsicologo(data.paciente.id).then((data) => {
              console.log("data", data);
              const elem = data.map((cita) => {
                return (
                  <Link
                    to={`/cita/${cita.cita_id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <TarjetaCita
                      key={cita.cita_id}
                      id={cita.cita_id}
                      fecha={cita.fecha}
                      paciente_id={cita.paciente_id}
                      duracion={cita.duracion}
                      descripcion={cita.descripcion}
                      estado={cita.estado}
                      lugar={cita.lugar}
                      role={role}
                    />
                  </Link>
                );
              });
              setCitas(elem);
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, []);

  return (
    <div>
      <h1>Mis citas</h1>
      {citas}
    </div>
  );
}
