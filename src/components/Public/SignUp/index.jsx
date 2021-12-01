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
import PacienteSignUp from "./pacienteSignUp";
import PsicologoSignUp from './psicologoSignUp';

const SignUp = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setpasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [selectRole, setSelectRole] = useState("Paciente");
  const [showAlert, setShowAlert] = useState(false);

  function handleClick() {
    setShowAlert(false);
  }

  const roleChange = (event) => {
    setSelectRole(event.target.value);
  };

  const HandleSignUp = () => {
    console.log("selectRole", selectRole);
    if(selectRole === "Paciente"){
    setPage(2);
    }
    if(selectRole === "Psicologo"){
      setPage(3);
      }
  };

  function renderSignUp() {
    if (page === 1) {
      return (
        <div>
          <div style={{ width: "100%" }}>
            {showAlert ? <AlertSingUp handleClick={handleClick} /> : null}
          </div>
          <Vectorbrain />
          <H1Login style={{ paddingTop: "10px" }}>Crea tu cuenta</H1Login>
          <Form>
            <Input
              key="Name"
              title="Nombre"
              type="text"
              id="name"
              name="name"
              setState={setName}
              state={name}
            />
            <Input
              key="username"
              title="Username"
              type="text"
              id="username"
              name="username"
              setState={setUsername}
              state={username}
            />
            <Input
              key="email"
              title="Email"
              type="email"
              id="email"
              name="email"
              setState={setEmail}
              state={email}
            />
            <Input
              title="Password"
              key="Contrasena"
              type="password"
              id="password"
              name="password"
              setState={setPassword}
              state={password}
            />
            <Input
              key="confirm"
              title="Confirmar contrasena"
              type="password"
              id="confirm"
              name="confirm"
              setState={setpasswordConfirmation}
              state={passwordConfirmation}
            />
            <select key="selectRole" value={selectRole} onChange={roleChange}>
              <option value="Paciente">Paciente</option>
              <option value="Psicologo">Psicologo</option>
            </select>
          </Form>
          <DivBoton>
            <Button
              fluid
              text="Siguiente"
              large
              primary
              onClick={HandleSignUp}
            ></Button>
          </DivBoton>
          <Divaccount>
            <Link style={{ textDecoration: "none" }} to="/login">
              <PLogin>
                Ya tienes una cuenta? <ALogin>Entrar</ALogin>
              </PLogin>
            </Link>
          </Divaccount>
        </div>
      );
    }
    if (page === 2) {
      return (
        <div>
          <PacienteSignUp
            name={name}
            username={username}
            email={email}
            password={password}
            passwordConfirmation={passwordConfirmation}
            role={selectRole}
          />
        </div>
      );
    }
    if (page === 3) {
      return (
        <div>
          <PsicologoSignUp
            name={name}
            username={username}
            email={email}
            password={password}
            passwordConfirmation={passwordConfirmation}
            role={selectRole}
          />
        </div>
      );
    }
  }

  return (
    <div style={{ height: "100%", padding: "10px 0" }}>
      <StyledContainer>{renderSignUp()}</StyledContainer>
    </div>
  );
};

export default SignUp;
