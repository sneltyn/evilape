import React, { useState } from "react";
import "./Wallet.scss";
import "./../WalletsEmpty/WalletsEmpty.scss";
import Laoyut from "../../../components/Layout/Layout";
import WalletView from "../views";
import ModalSave from "../views/ModalSave/ModalSave";
import CheckBox from "../../../components/Checkbox/Checkbox";
import ModalAdd from "../views/ModalAdd/ModalAdd";
import { useAppSelector } from "app/hooks";
import { allWallets, deleteWalletAsync } from "slices/waletsSlice";
import { useDispatch } from "react-redux";

const Wallet = React.memo((props) => {
  const dispatch = useDispatch();

  const [modalSave, setIsModalSave] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setIsModalSave(true);
  };

  const [checked, setChecked] = useState(true);

  const wallets = useAppSelector(allWallets);

  // let msg;
  // if (checked) {
  //   msg = <span style={({background: 'red'})}>галочка есть</span>;
  // } else {
  //   msg = <span style={({background: 'green'})}>галочки есть</span>;
  // }

  return (
    <>
      <Laoyut page="Wallets">
        {/* <div>
          <span>{msg}</span>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        </div> */}

        <WalletView isTransaction={false} count={wallets.length} />

        <div className="wallet">
          <div className="container">
            <div className="wallet__inner">
              {wallets.length > 0 ? (
                <div className="wallet__table">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <div className="wallet__table--checked"></div>
                        </th>
                        <th>Nickname</th>
                        <th>Wallet Address</th>
                        <th>Balance</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wallets.map((item) => (
                        <tr>
                          <td>
                            <CheckBox />
                          </td>
                          <td className="cyan">{item.nickname}</td>
                          <td className="bold cyan">{item.address}</td>
                          <td className="bold cyan text-hover">
                            Check Balance
                          </td>
                          <td>
                            <a
                              href="#"
                              className="wallet__table--delete"
                              onClick={() => dispatch(deleteWalletAsync(item))}
                            >
                              <svg
                                width="39"
                                height="26"
                                viewBox="0 0 39 26"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="39" height="26" rx="4" />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M26.5 8H11.5V10.5C12.4205 10.5 13.1667 11.2462 13.1667 12.1667V14.6667C13.1667 17.3333 13.1667 18.6666 13.9548 19.5268C14.0138 19.5911 14.0755 19.6529 14.1399 19.7118C15 20.5 16.3334 20.5 19 20.5C21.6666 20.5 23 20.5 23.8601 19.7118C23.9245 19.6529 23.9862 19.5911 24.0452 19.5268C24.8333 18.6666 24.8333 17.3333 24.8333 14.6667V12.1667C24.8333 11.2462 25.5795 10.5 26.5 10.5V8ZM17.9168 12.1666C17.9168 11.6143 17.4691 11.1666 16.9168 11.1666C16.3645 11.1666 15.9168 11.6143 15.9168 12.1666V16.3333C15.9168 16.8855 16.3645 17.3333 16.9168 17.3333C17.4691 17.3333 17.9168 16.8855 17.9168 16.3333V12.1666ZM22.0835 12.1666C22.0835 11.6143 21.6358 11.1666 21.0835 11.1666C20.5312 11.1666 20.0835 11.6143 20.0835 12.1666V16.3333C20.0835 16.8855 20.5312 17.3333 21.0835 17.3333C21.6358 17.3333 22.0835 16.8855 22.0835 16.3333V12.1666Z"
                                  fill="white"
                                />
                                <path
                                  d="M17.3904 5.80883C17.4854 5.72023 17.6946 5.64194 17.9857 5.5861C18.2768 5.53027 18.6334 5.5 19.0003 5.5C19.3672 5.5 19.7239 5.53027 20.0149 5.5861C20.306 5.64194 20.5152 5.72023 20.6102 5.80883"
                                  stroke="white"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                />
                              </svg>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <>
                  <div className="wallet__table wallet__table--empty">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <div className="wallet__table--checked"></div>
                          </th>
                          <th>Nickname</th>
                          <th>Wallet Address</th>
                          <th>Balance</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="wallet-empty">
                    <div className="wallet-empty__img">
                      <img src="assets/images/wallet-empty.svg" alt="" />
                    </div>
                    <div className="wallet-empty__title">No Wallets Yet!</div>
                    <div className="wallet-empty__text">
                      Add some wallets to get started.
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <ModalAdd
          modalIsOpen={modalSave}
          closeModal={() => setIsModalSave(false)}
        ></ModalAdd>
      </Laoyut>
    </>
  );
});

export default Wallet;
