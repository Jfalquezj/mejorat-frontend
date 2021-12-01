import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Medicos from "../../../lib/ui/vectors/medicos";
import Vectorbrain from "../../../lib/ui/vectors/vectorbrain";

import {
  StyledRow,
  StyledCol,
  StyledHomeCol,
  H1Home,
  PHome,
  AHome,
  DivVector,
} from "./homeelements";

const Home = () => (
  <>
    <Container fluid>
      <StyledRow>
        <StyledCol>
          <Medicos />
        </StyledCol>
        <StyledHomeCol>
          <div>
            <DivVector><Vectorbrain /></DivVector>
            <H1Home>Bienvenido a Mejora-T</H1Home>
            <Link to="/login">
              <Button large text="Login now" secondary fluid></Button>
            </Link>
            <PHome>
              No tienes una cuenta ?{" "}
              <Link to="/signup"> <AHome>Únete gratis</AHome></Link>
            </PHome>
            <Link to="/signup">
              <Button large text="Sign Up" secondary fluid></Button>
            </Link>
          </div>
        </StyledHomeCol>
      </StyledRow>
    </Container>
  </>
);

export default Home;
