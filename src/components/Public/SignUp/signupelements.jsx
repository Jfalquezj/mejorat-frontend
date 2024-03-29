import styled from "styled-components";
import { Container } from "react-bootstrap";
import { H1, P, A } from "../../../lib/ui/text";

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
export const H1Login = styled(H1)`
  padding: 0px 20px 15px 0px;
  margin: 0px;
`;

export const PLogin = styled(P)`
  padding: 10px 0px 2px 0px;
  margin: 0;
  color: #616161;
  text-decoration: none;
`;

export const ALogin = styled(A)`
  color: #1ABC9C;
  margin-bottom: 200px;
  &:hover{
    color: #616161
  }
`;

export const Divaccount = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10px;
`;

export const DivBoton = styled.div`
  margin: 20px 0;
`;
