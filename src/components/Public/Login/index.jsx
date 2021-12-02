import { useState, useContext } from "react";
import { loginUser } from "./../../../services/userService";
import Button from "../../common/Button";
import Form from "../../common/Form";
import Input from "../../common/Input";
import Vectorbrain from "../../../lib/ui/vectors/vectorbrain";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useHistory } from "react-router";
import { AlertLogin } from "../../common/Alert";
import {
  PLogin,
  ALogin,
  H1Login,
  Divforgot,
  Divaccount,
  StyledContainer,
} from "./loginelements";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const auth = useContext(AuthContext);
  const history = useHistory();

  const redirect = (role) => {
    if (role === "Paciente") {
      return "/dashboard";
    } else if (role === "Psicologo") {
      return "/citas";
    }
  };
  function handleClick() {
    setShowAlert(false);
  }

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser(username, password)
      .then((data) => {
        console.log(data);
        if (data.token) {
          const user = data;
          console.log("login user", user)
          auth.login(user);
          history.push(redirect(user.role));
        } else if (!data.token) {
          setShowAlert(true);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <StyledContainer>
      <div>
        <div style={{ width: "100%" }}>
          {showAlert ? <AlertLogin handleClick={handleClick} /> : null}
        </div>
        <Vectorbrain />
        <H1Login>Entra a tu cuenta</H1Login>
        <Form>
          <Input
            key="username"
            title="Email o Username"
            type="text"
            id="username"
            name="username"
            placeholder=""
            setState={setUsername}
            state={username}
          />
          <Input
            title="Contrasena"
            key="password"
            type="password"
            id="password"
            name="password"
            placeholder=""
            setState={setPassword}
            state={password}
          />
        </Form>
        <Divforgot>
          <Link to="/recover">
            {" "}
            <ALogin>Olvidó su contraseña?</ALogin>
          </Link>
        </Divforgot>
        <Button
          fluid
          text="Entrar"
          large
          primary
          onClick={handleLogin}
        ></Button>
        <Divaccount>
          <PLogin>
            No tienes cuenta?{" "}
            <Link to="/signup">
              {" "}
              <ALogin>Unete de manera gratuita</ALogin>
            </Link>
          </PLogin>
        </Divaccount>
      </div>
    </StyledContainer>
  );
};

export default Login;
