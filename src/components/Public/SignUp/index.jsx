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

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setpasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const auth = useContext(AuthContext);
  const history = useHistory();
  function handleClick() {
    setShowAlert(false);
  }
  const loginusertodashboard = (username, password) => {
    loginUser(username, password)
      .then((data) => {
        if (data.token) {
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
      name: name,
      username: username,
      password: password,
      email: email,
      role:"Paciente",
    };
    event.preventDefault();
    singupUser(userInfo)
      .then((data) => {
        if (data.user) {
          loginusertodashboard(username, password);
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

export default SignUp;
