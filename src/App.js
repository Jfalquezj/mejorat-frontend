import { BrowserRouter, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import routes from "./lib/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./lib/privateroute";
import PublicRoute from "./lib/publicroute";

const App = () => {
  const { restricted, unrestricted } = routes;
  return (
    <main>
      <BrowserRouter>
        <Switch>
          {restricted.map(({ path, component }) => (
            <PrivateRoute key={path} exact  path={path} component={component} />
          ))}
          {unrestricted.map(({ path, component }) => (
            <PublicRoute key={path} exact path={path} component={component} />
          ))}
        </Switch>
        <Redirect from="*" to="/" />
      </BrowserRouter>
    </main>
  );
};

export default App;
