import React from "react";
import Tarjetapsicologos from "./Tarjetapsicologo/tarjetapsicologos";
import { getallpsicologos } from "../../../services/psicologoServices";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Psicologos() {
  const [psico, setPsico] = useState([]);
  useEffect(() => {
    getallpsicologos().then((data) => {
      const elem = data.map((psicologo) => {
        return (
          <Link to={`/psicologo/${psicologo.id}`} style={{textDecoration: "none",color:'black'}}>
            <Tarjetapsicologos
              key={psicologo.id}
              id={psicologo.id}
              calificacion={psicologo.calificacion}
              tarifa_por_hora={psicologo.tarifa_por_hora}
            />
          </Link>
        );
      });
      setPsico(elem);
    });
  },[]);

  return (
    <div>
      <h1>Lista de psicólogos</h1>
      {psico}
    </div>
  );
}
