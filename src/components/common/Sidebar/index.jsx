import routes from "../../../lib/routes";
import {
  NavContainer,
  DivElement,
  PHome,
  Divlogo,
  SidebarElements,
} from "./sidebarelements";
import Button from "../../common/Button";
import SelectIcon from "../../../lib/ui/icons/icons";
import React, { useState, useEffect, useContext } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { logoffUser } from "./../../../services/userService";
import Vectorbrain from "../../../lib/ui/vectors/vectorbrain";
import { AuthContext } from "../../../context/AuthContext";

const Side = ({ active }) => {
  const [isMobile, setMobile] = useState(window.innerWidth > 1200);
  const history = useHistory();
  const { user } = useContext(AuthContext);
  let userLocalStorage = localStorage.getItem("user");
  const getRole = () => {
    try {
      const jsonUserLocalStorage = userLocalStorage && JSON.parse(userLocalStorage);
      const role = jsonUserLocalStorage?.role;
      if (!role) {
        try {
          const jsonUser = user && JSON.parse(user);
          const role = jsonUser?.role;
          return role;
        } catch (e) {
          console.log("error", e);
          const role = user?.role;
          return role;
        }
      } else {
        return role;
      }
    } catch (e) {
      console.log("error", e);
      const role = userLocalStorage?.role;
      return role;
    }
  };

  const updateMedia = () => {
    setMobile(window.innerWidth > 1200);
  };
  const logOut = () => {
    logoffUser(window);
    history.push("/");
    window.location.reload();
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const { restricted } = routes;

  let result = null;

  const roleShow = () => {
    console.log("getRole()", getRole());
    if (getRole() === "Paciente") {
      result = restricted.filter((word) =>
        [
          "Psicologos",
          "Mis Citas",
          "Pendientes",
          "Historial",
          "Mi Perfil",
        ].includes(word.title)
      );
    }
    if (getRole() === "Psicologo") {
      result = restricted.filter((word) =>
        ["Mis Citas", "Pendientes", "Historial", "Mi Perfil"].includes(
          word.title
        )
      );
    }
  };

  return (
    <NavContainer style={{ overflowY: "auto", height: "calc(100vh )" }}>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          width: "100%",
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <Vectorbrain></Vectorbrain>
      </div>
      {roleShow()}
      {result.map(({ path, title, index }) => (
        <SidebarElements key={index} to={path}>
          <DivElement
            style={{ color: active === title ? "#1da1f2" : "#333333" }}
          >
            <SelectIcon name={title} />
            <PHome>{title}</PHome>
          </DivElement>
        </SidebarElements>
      ))}
      <div
        style={{
          position: "absolute",
          padding: "20px",
          borderRadius: "30px",
          background: "#d6d6d6",
          bottom: "10px",
          display: "inline-block",
          cursor: "pointer",
        }}
        onClick={logOut}
      >
        <p style={{ margin: "0px" }}>Cerrar Sesion</p>
      </div>
    </NavContainer>
  );
};

export default withRouter(Side);
