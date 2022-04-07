import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "app/hooks";
import { allWallets, deleteWalletAsync } from "slices/waletsSlice";
import Laoyut from "./../../components/Layout/Layout";
import WalletView from "./views";
import ModalSave from "./views/ModalSave/ModalSave";
import CheckBox from "./../../components/Checkbox/Checkbox";
import ModalAdd from "./views/ModalAdd/ModalAdd";

import "./Minting.scss";
import "./WalletsEmpty/WalletsEmpty.scss";

const Minting = React.memo((props) => {
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
      <Laoyut page="Latest Minting">
        {/* <div>
          <span>{msg}</span>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        </div> */}

        <div className="wallet">
          <div className="container">
            <div className="minting__tab-title-wrapper">
              <h2 className="minting__tab-title">Latest Blocks</h2>
              <span className="minting__tab-sub-title">Across Aspide.io</span>
            </div>
            <div className="wallet__inner">
              {wallets.length > 0 ? (
                <div className="wallet__table minting__table">
                  <table>
                    <thead>
                      <tr>
                        <th>Block</th>
                        <th>Duration</th>
                        <th>Validated by</th>
                        <th>Gas used</th>
                        <th>Gas limit</th>
                        <th>Timestamp</th>
                        <th>Amount spent</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wallets.map((item) => (
                        <tr>
                          <td className="bold cyan">{item.nickname}</td>
                          <td className="bold cyan">{item.address}</td>
                          <td className="bold cyan text-hover">
                            Check Balance
                          </td>
                          <td className="white">—</td>
                          <td className="white">—</td>
                          <td className="white">—</td>
                          <td className="white">
                            <div className="eth">—</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <>
                  <div className="wallet__table wallet__table--empty minting__table">
                    <table>
                      <thead>
                        <tr>
                          <th>Block</th>
                          <th>Duration</th>
                          <th>Validated by</th>
                          <th>Gas used</th>
                          <th>Gas limit</th>
                          <th>Timestamp</th>
                          <th>Amount spent</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="wallet-empty">
                    <div className="wallet-empty__img">
                      <img src="assets/images/wallet-empty.svg" alt="" />
                    </div>
                    <div className="wallet-empty__title">Wait for minting!</div>
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

export default Minting;
