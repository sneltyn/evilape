import React, { useState } from "react";
import Modal from "react-modal";
import Field from "../../../../components/Field/Field";
import "./ModalAdd.scss";
import { useDispatch } from "react-redux";
import { addWalletAsync } from "slices/waletsSlice";
import { useAppDispatch } from "app/hooks";

const ModalAdd = React.memo((props) => {
  const dispatch = useDispatch();

  const [address, setAddress] = useState("");
  const [nickname, setNickname] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [password, setPassword] = useState("");
  const [verPassword, setVerPassword] = useState("");
  const [modalSaveOpen, setSaveOpen] = useState(false);

  const { modalIsOpen, closeModal } = props;

  const next = () => {
    if (address == "" || nickname == "" || privateKey == "") return;
    setSaveOpen(true);
  };

  const save = () => {
    if (password == "" || verPassword == "" || verPassword != password) return;

    dispatch(addWalletAsync({ address, nickname, privateKey, password }));

    close();
  };

  const close = () => {
    setSaveOpen(false);
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
      >
        <form className="modal create-wallet">
          <div className="modal__header">
            <div className="create-wallet__top">
              <img src="assets/images/create-wallet-modl.svg" alt="" />
              <h2 className="modal__title title">Create Wallet</h2>
            </div>
            <div className="modal__close" onClick={closeModal}>
              <img src="assets/images/modal-close.svg" alt="" />
            </div>
          </div>
          <div className="create-wallet__items">
            <Field
              label="Wallet Address"
              placeholder="Wallet Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Field
              label="Wallet Private Key"
              placeholder="Private Key"
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
            />
            <Field
              label="Wallet Nickname"
              placeholder="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <div className="create-wallet__buttons">
            <a href="#" className="create-wallet__cancel" onClick={closeModal}>
              Cancel
            </a>
            <a href="#" className="create-wallet__save" onClick={next}>
              <img src="assets/images/wallet-modal.svg" alt="" />
              <span>Save changes</span>
            </a>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={modalSaveOpen}
        onRequestClose={close}
        shouldCloseOnOverlayClick={true}
      >
        <form className="modal create-wallet">
          <div className="modal__header">
            <div className="create-wallet__top">
              <img src="assets/images/create-wallet-modl.svg" alt="" />
              <h2 className="modal__title title">Save Wallets</h2>
            </div>
            <div className="modal__close" onClick={close}>
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
            <button className="create-wallet__cancel" onClick={close}>
              Cancel
            </button>
            <button className="create-wallet__save" onClick={save}>
              <img src="assets/images/wallet-modal.svg" alt="" />
              <span>Save changes</span>
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
});

export default ModalAdd;
