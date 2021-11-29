import { useContext, useState, useEffect } from "react";
import {
  StyledCol,
  CenterWrapper,
  DivFoto,
  TopWrapper,
  SpacedHorizontal,
  H2Profile,
  PProfile,
  Row,
  Column,
  Field,
} from "./profileelements";
import Foto from "../../../lib/ui/vectors/fotopaciente";
import { BsCalendarFill } from "react-icons/bs";
import SelectIcon from "../../../lib/ui/icons/icons";
import { getPaciente } from "../../../services/pacienteServices";
import { getPsicologo } from "../../../services/psicologoServices";

const Profile = () => {
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

  const getRole = () => {
    try {
      const jsonUser = user && JSON.parse(user);
      const role = jsonUser?.role;
      return role;
    } catch (e) {
      console.log("error", e);
      const role = user?.role;
      return role;
    }
  };

  useEffect(() => {
    const ID = getUserId();
    if (getRole() === "Paciente") {
      getPaciente(ID)
        .then((data) => {
          if (data.paciente) {
            setPatient(data.paciente);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }

    if (getRole() === "Psicologo") {
      getPsicologo(ID)
        .then((data) => {
          if (data.paciente) {
            setPatient(data.paciente);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, []);

  function renderPerfil() {
    if (getRole() === "Paciente") {
      return (
        <Row>
            <Column>
              <Field>Email: {patient ? patient.User.email : ""}</Field>
              <Field>Edad: {patient ? patient.edad : ""}</Field>
              <Field>
                Historia clínica: {patient ? patient.historia_clinica : ""}
              </Field>
            </Column>
            <Column>
              <Field>Teléfono: {patient ? patient.User.phone : ""}</Field>
              <Field>EPS afiliada: {patient ? patient.eps : ""}</Field>
              <Field>
                Modalidad: {patient ? patient.preferencia_de_lugar : ""}
              </Field>
            </Column>
          </Row>
      );
    }

    if (getRole() === "Psicologo") {
      return (
        <Row>
            <Column>
              <Field>Email: {patient ? patient.User.email : ""}</Field>
              <Field>Especializacion: {patient ? patient.especializacion : ""}</Field>
              <Field>
                Tarifa por hora: {patient ? patient.tarifa_por_hora : ""}
              </Field>
            </Column>
            <Column>
              <Field>Teléfono: {patient ? patient.User.phone : ""}</Field>
              <Field>Especializacion: {patient ? patient.especializacion : ""}</Field>
              <Field>
              Calificacion: {patient ? patient.calificacion : ""}
              </Field>
            </Column>
          </Row>
      );
    }
  }

  return (
    <>
      <StyledCol>
        <TopWrapper>
          <DivFoto>
            <Foto />
            <SelectIcon name={"Edit"} />
          </DivFoto>
          <SpacedHorizontal>
            <H2Profile>{patient ? patient.User.username : ""}</H2Profile>
          </SpacedHorizontal>
          <PProfile>{patient ? patient.User.role : ""} </PProfile>
          <PProfile>{patient ? patient.User.name : ""} </PProfile>
          <PProfile>{patient ? patient.User.descripcion : ""} </PProfile>
        </TopWrapper>
        <CenterWrapper>
          {renderPerfil()}
        </CenterWrapper>
      </StyledCol>
    </>
  );
};

export default Profile;
