import React, { useRef, useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import ReactDom from "react-dom";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import TimePicker from "@mui/lab/TimePicker";
import TextArea from "../../common/TextArea";
import Form from "../../common/Form";
import Button from "../../common/Button";
import { createCita } from "../../../services/citaServices";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: abosulte;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: "rgba(0, 0, 0, .7)";
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 540px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({
  showModal,
  setShowModal,
  psicologo_id,
  paciente_id,
  lugar,
}) => {
  const modalRef = useRef();
  const [value, setValue] = React.useState(new Date("2021-08-18T21:11:54"));
  const [descripcion, setDescripcion] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log("value", value);
  };

  const handlePedirCita = (event) => {
    event.preventDefault();
    const cita = {
      fecha: value,
      lugar,
      descripcion: descripcion,
      psicologo_id: psicologo_id,
      paciente_id: paciente_id,
    };
    createCita(cita)
      .then((data) => {
        console.log(data);
        if (data) {
          console.log("pedir cita data",data)
          setShowModal(false);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return ReactDom.createPortal(
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <Form>
                <LocalizationProvider dateAdapter={DateAdapter}>
                  <h1>Pedir cita</h1>
                  <h3>Hora de la cita</h3>
                  <TimePicker
                    label="Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <h3>Dia de la cita</h3>
                  <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <TextArea
                    key="descripcion"
                    title="Descripción:"
                    type="text"
                    id="descripcion"
                    name="descripcion"
                    placeholder=""
                    setState={setDescripcion}
                    state={descripcion}
                  />
                  <Button
                    fluid
                    text="Completar"
                    large
                    primary
                    onClick={handlePedirCita}
                  ></Button>
                </LocalizationProvider>
              </Form>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>,
    document.getElementById("portal")
  );
};
