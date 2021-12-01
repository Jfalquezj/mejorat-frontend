import styled from "styled-components";

export const DivTarjeta = styled.div`
  margin: 15px;
  padding: 15px;
  border: 2px;
  border-color: #dddddd;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  &:hover{
    background: #e2e1e18d;
  }
`;
export const DivInfo = styled.div`
   width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const DivFoto = styled.div`
  width: 20%;
`;
export const Precio = styled.div`
  width: 20%;
`;
