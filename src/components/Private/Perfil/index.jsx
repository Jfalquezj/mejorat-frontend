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
import { AuthContext } from "../../../context/AuthContext";
import { getPaciente } from "../../../services/pacienteServices";

const Profile = () => {
  const [patient, setPatient] = useState("");
  const { user } = useContext(AuthContext);

  const getUserId = () => {
    let user = localStorage.getItem("user");;
    try {
      const jsonUser = user && JSON.parse(user);
      const ID = jsonUser?.userId;
      return ID;
    } catch (e) {
      console.log("error",e)
      const ID = user?.userId;
      return ID;
    }
  };

  useEffect(() => {
    const ID = getUserId();
    getPaciente(ID)
      .then((data) => {
        console.log("data", data.paciente);
        setPatient(data.paciente);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  console.log("patient", patient);

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
          <PProfile>{patient ? patient.User.name : ""} </PProfile>
          <PProfile>{patient ? patient.User.descripcion : ""} </PProfile>
        </TopWrapper>
        <CenterWrapper>
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
        </CenterWrapper>
      </StyledCol>
    </>
  );
};

export default Profile;
