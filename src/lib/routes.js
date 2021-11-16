import Login from "../components/Public/Login";
import SignUp from "./../components/Public/SignUp";
import Home from "./../components/Public/Home";
import Recover from "./../components/Public/Recover";
import Dashboard from "./../components/Private/Dashboard";


const routes = {
  restricted: [
    {
      title: "Dashboard",
      path: "/dashboard",
      component: Dashboard,
    },
    {
      title: "Psicologos",
      path: "/dashboard",
      component: Dashboard,
    },
    {
      title: "Mis Citas",
      path: "/citas",
      component: Dashboard,
    },
    {
      title: "Pendientes",
      path: "/pendientes",
      component: Dashboard,
    },
    {
      title: "Historial",
      path: "/historial",
      component: Dashboard,
    },
    {
      title: "Mi Perfil",
      path: "/perfil",
      component: Dashboard,
    },
  ],
  unrestricted: [
    {
      title: "Home",
      path: "/",
      component: Home,
    },
    {
      title: "Login",
      path: "/login",
      component: Login,
    },
    {
      title: "Sign Up",
      path: "/signup",
      component: SignUp,
    },
    {
      title: "Recover",
      path: "/recover",
      component: Recover,
    },
  ],
};
export default routes;
