import React, { useState } from "react";
import Modal from "react-modal";

const ModalSave = React.memo((props) => {

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
            <img src="assets/images/wallet-eth.svg" alt="" />
            <h2 className="modal__title title">Distribute ETH to Wallets?</h2>
          </div>
          <div className="modal__close" onClick={closeModal}>
            <img src="assets/images/modal-close.svg" alt="" />
          </div>
        </div>
        <div className="create-wallet__subtitle">
          Send ETH from "wallet1" wallet
        </div>
        <div className="create-wallet__description">
          The 3 wallets selected will be sent 0 ETH each. The amount of gas sent
          will be the current base fee on the Ethereum network (this will change
          block to block).
        </div>
        <div className="create-wallet__buttons create-wallet__buttons--eth">
          <button className="create-wallet__cancel">Cancel</button>
          <button className="create-wallet__save"><span>Send ETH</span></button>
        </div>
      </form>
    </Modal>
  );
});

export default ModalSave;
