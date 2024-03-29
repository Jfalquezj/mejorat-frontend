import Sidebar from "../../common/Sidebar/index";
import { ColNav, Divmain, Divside, TimelineDiv } from "./dashboardelements";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Psicologos from "../Psicologos/index";
import Perfil from "../Perfil/index";
import MisCitas from '../MisCitas/index';
import Pendientes from '../Pendientes/index';
import CitaPage from '../CitaPage/index';
import PerfilP from '../Psicologos/perfil/perfilpsicologo';
import Historial from '../Historial/index';

const Dashboard = () => {
  const [title, setTitle] = useState("");
  return (
    <BrowserRouter>
      <Divmain>
        <ColNav style={{marginRight:'5vw'}}>
            <Sidebar active={title}></Sidebar>
       
        </ColNav>
        <div style={{ widht: "990px", display: "flex" }}>
          <TimelineDiv>
            <Switch>
              <Route path="/dashboard">
                <Psicologos />
              </Route>
              <Route path="/perfil">
                <Perfil />
              </Route>
              <Route path="/cita/:id">
                <CitaPage />
              </Route>
              <Route path="/citas">
                <MisCitas />
              </Route>
              <Route path="/historial">
                <Historial />
              </Route>
              <Route path="/pendientes">
                <Pendientes />
              </Route>
              <Route path="/psicologo/:id">
                <PerfilP />
              </Route>
            </Switch>
          </TimelineDiv>
        </div>
      </Divmain>
    </BrowserRouter>
  );
};

export default Dashboard;
