import React from "react";
import Tarjetapsicologos from "./Tarjetapsicologo/tarjetapsicologos";
import { getallpsicologos } from "../../../services/psicologoServices";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Psicologos() {
  const [psico, setPsico] = useState([]);
  useEffect(() => {
    getallpsicologos().then((data) => {
      let elem = null;
      if (data) {
         elem = data.map((psicologo) => {
          return (
            <Link
              to={`/psicologo/${psicologo.User?.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Tarjetapsicologos
                key={psicologo.id}
                id={psicologo.id}
                calificacion={psicologo.calificacion}
                especializacion={psicologo.especializacion}
                nombre={psicologo.User?.name}
                tarifa_por_hora={psicologo.tarifa_por_hora}
              />
            </Link>
          );
        });
      }else{
          elem = (
          <p>No hay psicólogos disponibles</p>
        );
      }
      setPsico(elem);
    });
  }, []);

  return (
    <div style={{ padding: "20px", marginBottom: "15px" }}>
      <h1>Lista de psicólogos</h1>
      {psico}
    </div>
  );
}
