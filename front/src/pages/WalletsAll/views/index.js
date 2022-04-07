import React, { useState } from 'react';
import './index.scss';
import ModalAdd from './ModalAdd/ModalAdd';

const WalletView = React.memo((props) => {
  const [modalAdd, setIsModalAdd] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsModalAdd(true);
  };

  const { isTransaction, count } = props;

  return (
    <>
      <div
        className={`wallet-view ${
          isTransaction ? 'wallet-view-transaction' : ''
        }`}
      >
        <div className="container">
          <div className="wallet-view__inner">
            <div className="wallet-view__info">
              <div className="wallet-view__content">
                <div className="wallet-view__img">
                  <img src="assets/images/wallet-img.svg" alt="" />
                </div>
                <div className="wallet-view__text">
                  <p>{count} Wallets</p>
                  <span>Current saved wallets</span>
                </div>
              </div>
              <a
                href="#"
                className="wallet-view__btn button"
                onClick={(e) => handleEdit(e)}
              >
                <img src="assets/images/add-wallet.svg" alt="" />
                <span>Add Wallet</span>
              </a>
            </div>
            {isTransaction ? (
              <div className="wallet-view__transaction">
                <div className="wallet-view__transaction--close">
                  <img src="assets/images/transaction-close.svg" alt="" />
                </div>
                <div className="wallet-view__transaction--flag">
                  <img src="assets/images/transaction-flag.svg" alt="" />
                </div>
                <span className="wallet-view__transaction--name">
                  Transaction Successful
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <ModalAdd
        modalIsOpen={modalAdd}
        closeModal={() => setIsModalAdd(false)}
      ></ModalAdd>
    </>
  );
});

export default WalletView;
