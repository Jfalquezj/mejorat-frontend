import Button from "../../common/Button";
import Form from "../../common/Form";
import Input from "../../common/Input";
import Vectorbrain from "../../../lib/ui/vectors/vectorbrain";
import { useState, useContext } from "react";
import { singupUser, loginUser, createPsicologo } from "./../../../services/userService";
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

const PsicologoSignUp = (props) => {
  const { name , username, email, password, passwordConfirmation, role} = props;
  const [tarifa, setTarifa] = useState("");
  const [horas, setHoras] = useState("");
  const [calificacion, setCalificacion] = useState("");
  const [especializacion, setEspecializacion] = useState("");
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
          console.log("puede ser pa")
          history.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const signUpPsicologo = (userId) => {
    const userInfo = {
        tarifa_por_hora: tarifa,
        calificacion: 5,
        especializacion: especializacion,
        UserId: userId
      };
      createPsicologo(userInfo)
      .then((data) => {
        if (data.data.psicologo) {
            loginusertodashboard(username, password);
          } else {
            console.log("elsepaciente", data)
            setShowAlert(true);
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
      passwordConfirmation: passwordConfirmation,
      email: email,
      role: role,
    };
    event.preventDefault();
    singupUser(userInfo)
      .then((data) => {
        if (data.user) {
            console.log("data.user.id", data.user.id)
            signUpPsicologo(data.user.id);
        } else {
          setShowAlert(true);
        }
      })
      .catch((err) => {
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
              key="tarifa"
              title="Tarifa por hora"
              type="text"
              id="tarifa"
              name="tarifa"
              setState={setTarifa}
              state={tarifa}
            />
            <Input
              key="especializacion"
              title="Especializacion"
              type="text"
              id="especializacion"
              name="especializacion"
              setState={setEspecializacion}
              state={especializacion}
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

export default PsicologoSignUp;