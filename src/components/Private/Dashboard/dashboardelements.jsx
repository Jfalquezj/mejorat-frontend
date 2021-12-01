import styled from "styled-components";

export const ColNav = styled.div`
  min-width: 68px;
  @media screen and (max-width: 1200px) {
    width: 100px;
    padding: 0px 10px;
    margin-right: 0px;
  }
  @media screen and (max-width: 650px) {
    width: 100px;
    padding: 2px;
    margin-right: 0px;
  }
`;

export const Divmain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* required */
  overflow: hidden;
`;
export const Divside = styled.div`
  width: 300px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
  margin-left: 30px;
`;

export const TimelineDiv = styled.div`
  width: 600px;
  @media screen and (max-width: 700px) {
    width: 80vw;
  }
`;
