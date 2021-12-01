import Sidebar from "../../common/Sidebar/index";
import { ColNav, Divmain, Divside, TimelineDiv } from "./dashboardelements";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Psicologos from "../Psicologos/index";
import Perfil from "../Perfil/index";
import MisCitas from '../MisCitas/index';
import Pendientes from '../Pendientes/index';
import CitaPage from '../CitaPage/index';

const Dashboard = () => {
  const [title, setTitle] = useState("");
  return (
    <BrowserRouter>
      <Divmain>
        <ColNav>
          <div className="position-fixed">
            <Sidebar active={title}></Sidebar>
          </div>
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
              <Route path="/pendientes">
                <Pendientes />
              </Route>
            </Switch>
          </TimelineDiv>
        </div>
      </Divmain>
    </BrowserRouter>
  );
};

export default Dashboard;
