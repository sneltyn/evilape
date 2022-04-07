import React, { useState } from "react";
import Modal from "react-modal";
import Field from "../../../../components/Field/Field";
import "./ModalSave.scss";

const ModalSave = React.memo((props) => {
  const [password, setPassword] = useState("");
  const [verPassword, setVerPassword] = useState("");

  const { modalIsOpen, closeModal } = props;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
    >
      <form className="modal create-wallet">
        <div className="modal__header">
          <div className="create-wallet__top">
            <img src="assets/images/create-wallet-modl.svg" alt="" />
            <h2 className="modal__title title">Save Wallets</h2>
          </div>
          <div className="modal__close" onClick={closeModal}>
            <img src="assets/images/modal-close.svg" alt="" />
          </div>
        </div>
        <div className="create-wallet__text">
          In order to save your wallets, please enter a password to safely
          encrypt them with
        </div>
        <div className="create-wallet__items">
          <Field
            label="Password:"
            placeholder="Password:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Field
            label="Verify Password"
            placeholder="Verify password:"
            value={verPassword}
            onChange={(e) => setVerPassword(e.target.value)}
          />
        </div>
        <div className="create-wallet__buttons create-wallet__buttons--bottom">
          <button className="create-wallet__cancel">Cancel</button>
          <button className="create-wallet__save">
            <img src="assets/images/wallet-modal.svg" alt="" />
            <span>Save changes</span>
          </button>
        </div>
      </form>
    </Modal>
  );
});

export default ModalSave;
