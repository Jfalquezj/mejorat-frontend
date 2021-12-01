import styled from "styled-components";

export const DivTarjeta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  &:hover {
    background: #e2e1e18d;
  }
`;
export const DivInfo = styled.div`
  margin-left: 15px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
`;

export const DivInfoBorder = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 15px;
  border: 2px;
  border-left-style: solid;
  border-left-color: #dddddd;
  border-right-style: solid;
  border-right-color: #dddddd;
`;
export const DivFoto = styled.div`
  width: 20%;
  margin: 15px;
`;
export const Precio = styled.div`
  width: 20%;
  margin-left: 15px;
  margin-right: 10px;
`;
