import styled from "styled-components";

export const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > p {
    color: #828282;
  }
`;

export const CenterWrapper =styled.div`
    display:flex;
    justify-content: center;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 20px;
    border-radius: 15px;
`;

export const TopWrapper =styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin-bottom: 20px;
    border-radius: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const DivFoto =styled.div`
    display:flex;
    justify-content: center;
    margin: 10px;
    & > img {
        border-style: solid;
        padding: 4px;
        border-color:  rgb(113, 232, 208);
  }
`;

export const Column =styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const Row =styled.div`
  display: flex;
  
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Field =styled.div`
    border-style: solid;
    padding: 4px;
    border-width: 1px;
    border-color:  #b0e2d8;
`;

export const StyledImg = styled.img`
    border-radius: 2px;
    border: 1px;
    margin-top: 20px;
`;

export const SpacedHorizontal =styled.div`
    display:flex;
    justify-content: center;
    margin: 10px;
`;

export const IconDiv = styled.div`
    margin-right: 10px;
`;


export const H2Profile = styled.h2`
    margin-top: 5px;
    font-style: normal;
    font-weight: 700;
`;

export const PProfile = styled.p`
    display:flex;
    justify-content: center;
    margin-left: 10px;
`;