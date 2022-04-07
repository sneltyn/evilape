import React, { useState } from "react";
import { Link } from "react-router-dom";
import Field from "../../components/Field/Field";
import Laoyut from "../../components/Layout/Layout";
import "./ManageTask.scss";

const ManageTask = React.memo((props) => {
  const [wallet, setWallet] = useState("Metamask 2");
  const [params, setParams] = useState("purchase");
  const [cost, setCost] = useState("Mainnet");
  const [addres, setAddres] = useState("196");
  const [trans, setTrans] = useState("2.3");
  const [price, setPrice] = useState("Rapid Price");
  const [contract, setContract] = useState("9Ce61A866c83cBbt0x47e312d99C0");
  const [limit, setLimit] = useState("Auto (Recommended)");

  const [currentRadioValue, setCurrentRadioValue] = useState();

  const handleRadioChange = (e) => {
    // setCurrentValue(e.target.value);
  };

  return (
    <>
      <Laoyut page="Tasks">
        <div className="manage-task">
          <div className="container">
            <div className="manage-task__inner">
              <Link to={"/tasks"} className="manage-task__back">
                <img src="assets/images/back.svg" alt="" />
                <span>back to tasks</span>
              </Link>
              <div className="manage-task__content">
                <div className="manage-task__info">
                  <div className="manage-task__top">
                    <div className="manage-task__img">
                      <img src="assets/images/tasks-img.svg" alt="" />
                    </div>
                    <span className="manage-task__title">Manage tasks</span>
                  </div>
                  <div className="manage-task__current">Current tasks</div>
                  <div className="manage-task__radio">
                    <label className="radio">
                      <span className="radio__btn">
                        <div className="radio__name">Showcase (Flashbots)</div>
                        <input
                          type="radio"
                          name="toggle"
                          checked
                          onChange={handleRadioChange}
                        />
                        <span></span>
                      </span>
                    </label>
                    <label className="radio">
                      <span className="radio__btn">
                        <div className="radio__name">Showcase (Flashbots)</div>
                        <input
                          type="radio"
                          name="toggle"
                          checked
                          onChange={handleRadioChange}
                        />
                        <span></span>
                      </span>
                    </label>
                    <label className="radio">
                      <span className="radio__btn">
                        <div className="radio__name">Showcase (Flashbots)</div>
                        <input
                          type="radio"
                          name="toggle"
                          checked
                          onChange={handleRadioChange}
                        />
                        <span></span>
                      </span>
                    </label>
                    <label className="radio">
                      <span className="radio__btn">
                        <div className="radio__name">Showcase (Flashbots)</div>
                        <input
                          type="radio"
                          name="toggle"
                          checked
                          onChange={handleRadioChange}
                        />
                        <span></span>
                      </span>
                    </label>
                    <label className="radio">
                      <span className="radio__btn">
                        <div className="radio__name">Showcase (Flashbots)</div>
                        <input
                          type="radio"
                          name="toggle"
                          checked
                          onChange={handleRadioChange}
                        />
                        <span></span>
                      </span>
                    </label>
                    <label className="radio">
                      <span className="radio__btn">
                        <div className="radio__name">Showcase (Flashbots)</div>
                        <input
                          type="radio"
                          name="toggle"
                          checked
                          onChange={handleRadioChange}
                        />
                        <span></span>
                      </span>
                    </label>
                    <label className="radio">
                      <span className="radio__btn">
                        <div className="radio__name">Showcase (Flashbots)</div>
                        <input
                          type="radio"
                          name="toggle"
                          checked
                          onChange={handleRadioChange}
                        />
                        <span></span>
                      </span>
                    </label>
                  </div>
                </div>
                <form action="#" className="manage-task__form">
                  <div className="manage-task__header">
                    <h2 className="manage-task__subtitle">Selected task</h2>
                    <div className="manage-task__close">
                      <img src="assets/images/modal-close.svg" alt="" />
                    </div>
                  </div>
                  <div className="manage-task__items">
                    <Field
                      label="Wallet"
                      value={wallet}
                      onChange={(e) => setWallet(e.target.value)}
                    />
                    <Field
                      label="Function Name"
                      value={params}
                      onChange={(e) => setParams(e.target.value)}
                    />
                    <Field
                      label="Transaction Network"
                      value={cost}
                      onChange={(e) => setCost(e.target.value)}
                    />
                    <Field
                      label="Function Parameters"
                      value={addres}
                      onChange={(e) => setAddres(e.target.value)}
                    />
                    <Field
                      label="Transaction Cost"
                      value={trans}
                      onChange={(e) => setTrans(e.target.value)}
                    />
                    <Field
                      label="Gas Price Method"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <Field
                      label="Contract Address"
                      value={contract}
                      onChange={(e) => setContract(e.target.value)}
                    />
                    <Field
                      label="Gas Limit Method"
                      value={limit}
                      onChange={(e) => setLimit(e.target.value)}
                    />
                  </div>
                  <div className="manage-task__buttons">
                    <a href="#" className="manage-task__edit">
                      <img src="assets/images/pen.svg" alt="" />
                      <span>Edit Task</span>
                    </a>
                    <a href="#" className="manage-task__duplicate">
                      <img src="assets/images/duplicate.svg" alt="" />
                      <span>Duplicate Task</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Laoyut>
    </>
  );
});

export default ManageTask;
