import React from "react";
import "./Modal.css";

const Modal = ({ setIsModalOpen }) => {
  return (
    <div id="modal">
      <div id="modal-body">
        <button id="modal-close" onClick={() => setIsModalOpen(false)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
