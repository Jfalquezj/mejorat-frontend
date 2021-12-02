import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import ReactDom from "react-dom";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import TimePicker from "@mui/lab/TimePicker";

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
  height: 500px;
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

export const HistorialModal = ({ showModal, setShowModal, descripcion }) => {
  const modalRef = useRef();

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
              <form>
                <h2>Recomendaciones y/o medicamentos: </h2>
                <p>{descripcion}</p>
              </form>
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
