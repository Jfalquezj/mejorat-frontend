import logo from "./brainvector.png";
import {Link} from "react-router-dom"
const Vectorbrain = () => (
  <Link to="/">
    {" "}
    <img src={logo} alt="brain vector" width="80px" />
  </Link>
);

export default Vectorbrain;
