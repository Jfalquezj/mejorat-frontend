import Button from "../../common/Button";
import Form from "../../common/Form";
import Input from "../../common/Input";
import Vectorbrain from "../../../lib/ui/vectors/vectorbrain";
import { useState, useContext } from "react";
import { singupUser, loginUser } from "./../../../services/userService";
import { AuthContext } from "../../../context/AuthContext";
import { useHistory } from "react-router";
import { AlertSingUp } from "../../common/Alert";
import { Link } from "react-router-dom";
import {
  PLogin,
  ALogin,
  H1Login,
  Divaccount,
  StyledContainer,
  DivBoton,
} from "./signupelements";

const PacienteSignUp = (props) => {
  const [page, setPage] = useState(1)
  const [lugar, setLugar] = useState("");
  const [historiaClinica, setHistoriaClinica] = useState("");
  const [eps, setEps] = useState("");
  const [edad, setEdad] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const auth = useContext(AuthContext);
  const history = useHistory();
  function handleClick() {
    setShowAlert(false);
  }
  const loginusertodashboard = (username, password) => {
    loginUser(username, password)
      .then((data) => {
        if (data) {
          const user = data;
          auth.login(user);
          history.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const HandleSingUp = (event) => {
    const userInfo = {
      preferencia_de_lugar: lugar,
      historia_clinica: historiaClinica,
      eps: eps,
      edad: edad,
      //name: name,
      //username: username,
      //password: password,
      //passwordConfirmation: passwordConfirmation,
      //email: email,
      //role: "Paciente",
    };
    event.preventDefault();
    singupUser(userInfo)
      .then((data) => {
        if (data.user) {
          //loginusertodashboard(username, password);
        } else {
          setShowAlert(true);
        }
      })
      .catch((err) => {
        console.log("fallo todo");
        console.log("err", err);
      });
  };

  return (
    <div style={{ height: "100%", padding: "10px 0" }}>
      <StyledContainer>
        <div>
          <div style={{ width: "100%" }}>
            {showAlert ? <AlertSingUp handleClick={handleClick} /> : null}
          </div>
          <Vectorbrain />
          <H1Login style={{ paddingTop: "10px" }}>Crea tu cuenta</H1Login>
          <Form>
            <Input
              key="lugar"
              title="Modalidad"
              type="text"
              id="lugar"
              name="lugar"
              setState={setLugar}
              state={lugar}
            />
            <Input
              key="historiaClinica"
              title="Antecedentes clínicos"
              type="text"
              id="historiaClinica"
              name="historiaClinica"
              setState={setHistoriaClinica}
              state={historiaClinica}
            />
            <Input
              key="eps"
              title="EPS a la que perteneces"
              type="text"
              id="eps"
              name="eps"
              setState={setEps}
              state={eps}
            />
            <Input
              key="edad"
              title="Edad"
              type="text"
              id="edad"
              name="edad"
              setState={setEdad}
              state={edad}
            />
          </Form>
          <DivBoton>
            <Button
              fluid
              text="Registrarse"
              large
              primary
              onClick={HandleSingUp}
            ></Button>
          </DivBoton>
          <Divaccount>
            <Link style={{textDecoration: "none"}}to="/login">
              <PLogin>
                Ya tienes una cuenta? <ALogin>Entrar</ALogin>
              </PLogin>
            </Link>
          </Divaccount>
        </div>
      </StyledContainer>
    </div>
  );
};

export default PacienteSignUp;