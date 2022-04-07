import React, { useState } from "react";
import "./WalletsETH.scss";
import Laoyut from "../../../components/Layout/Layout";
import WalletView from "../views";
import ModalEth from "../views/ModalEth/ModalEth";
import CheckBox from "../../../components/Checkbox/Checkbox";

const WalletEth = React.memo((props) => {
  const [modalEth, setIsModalEth] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    setIsModalEth(true);
  };

  const [checked, setChecked] = useState(true);

  // let msg;
  // if (checked) {
  //   msg = <span style={({background: 'red'})}>галочка есть</span>;
  // } else {
  //   msg = <span style={({background: 'green'})}>галочки есть</span>;
  // }

  return (
    <>
      <Laoyut page="Wallet">
        {/* <div>
          <span>{msg}</span>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        </div> */}

        <WalletView isTransaction={true} />
        <div className="wallet">
          <div className="container">
            <div className="wallet__inner">
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
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/actions-true.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CheckBox />
                      </td>
                      <td>Wallet 1</td>
                      <td className="bold">
                        0x8F9ba38419F089706a53c310ea0Aa26B7f4032d1
                      </td>
                      <td className="blue">Check Balance</td>
                      <td>
                        <a href="#" className="wallet__table--delete">
                          <img src="assets/images/delete-brown.svg" alt="" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ModalEth
          modalIsOpen={modalEth}
          closeModal={() => setIsModalEth(false)}
        ></ModalEth>
      </Laoyut>
    </>
  );
});

export default WalletEth;