import React, { useState } from "react";
import Modal from "react-modal";
import Field from "../../../../components/Field/Field";
import Select from "../../../../components/Select/Select";
import "./TasksModal.scss";
import { useAppSelector } from "app/hooks";
import { allWallets } from "slices/waletsSlice";

import { useDispatch } from "react-redux";
import { addTaskAsync } from "slices/tasksSlice";
import { useAppDispatch } from "app/hooks";

const TasksModal = React.memo((props) => {
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [params, setParams] = useState('');
  // const [cost, setCost] = useState('');
  // const [addres, setAddres] = useState('');
  // const [network] = useState('');
  // const [wallet] = useState('');

  const [state, setState] = useState({});

  const wallets = useAppSelector(allWallets).map((item) => ({
    value: item.id,
    label: item.nickname,
  }));

  const networks = {
    mainnet: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    ropsten: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  };

  const price = [
    {
      value: "Price",
      label: "Price",
    },
    {
      value: "Price 1",
      label: "Price 1",
    },
    {
      value: "Price 2",
      label: "Price 2",
    },
  ];

  const networkOptions = [
    {
      value: "mainnet",
      label: "mainnet",
    },
    {
      value: "ropsten",
      label: "ropsten",
    },
  ];

  const limit = [
    {
      value: "Auto",
      label: "Auto",
    },
    {
      value: "Manual",
      label: "Manual",
    },
  ];

  const { modalIsOpen, closeModal } = props;

  const handleChange = (e, name) => {
    setState((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));

    //dispatch(updateField({ name, value: e.target.value }));
  };

  const handleChangeOption = (val, name) => {
    setState((prevState) => ({
      ...prevState,
      [name]: val.value,
    }));
  };

  const handleChangeWallet = (val, name) => {
    setState((prevState) => ({
      ...prevState,
      walletId: val.value,
      wallet: val.label,
    }));
  };

  const save = () => {
    state.url = networks[state.network];
    console.log(state);

    dispatch(addTaskAsync(state));
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
      >
        <form className="modal create-tasks">
          <div className="modal__header">
            <div className="create-tasks__top">
              <img src="assets/images/create-task.svg" alt="" />
              <h2 className="modal__title title">Add Task</h2>
            </div>
            <div className="modal__close" onClick={closeModal}>
              <img src="assets/images/modal-close.svg" alt="" />
            </div>
          </div>
          <div className="create-tasks__items">
            <div className="create-tasks__item">
              <div className="field__label">Wallet</div>
              <Select
                options={wallets}
                placeholder="Wallet:"
                defaultValue={wallets[0]}
                onChange={(e) => handleChangeWallet(e, "wallet")}
              />
            </div>
            <div className="create-tasks__item">
              <Field
                label="Function Name"
                placeholder="Function Name"
                value={state.functionName}
                onChange={(e) => handleChange(e, "functionName")}
              />
            </div>
            <div className="create-tasks__item">
              <div className="field__label">
                Transaction Network Transaction Network
              </div>
              <Select
                options={networkOptions}
                defaultValue={networkOptions[0]}
                onChange={(e) => handleChangeOption(e, "network")}
                placeholder="Transaction Network"
              />
            </div>
            <div className="create-tasks__item">
              <Field
                label="Function Parameters"
                placeholder="Function Parameters (Seperated by commas)"
                value={state.functionParams}
                onChange={(e) => handleChange(e, "functionParams")}
              />
            </div>
            <div className="create-tasks__item">
              <Field
                label="Transaction Cost"
                placeholder="Transaction Cost"
                value={state.value}
                onChange={(e) => handleChange(e, "value")}
              />
            </div>
            <div className="create-tasks__item">
              <div className="field__label">
                Gas Price Method{" "}
                <span>Sends rapid gas price (Displayed at the bottom)</span>
              </div>
              <Select
                options={price}
                defaultValue={price[0]}
                placeholder="Rapid Price"
              />
            </div>
            <div className="create-tasks__item">
              <Field
                label="Contract Address"
                placeholder="Contract Address"
                value={state.contractAddress}
                onChange={(e) => handleChange(e, "contractAddress")}
              />
            </div>
            <div className="create-tasks__item">
              <div className="field__label">Gas Limit Method</div>
              <Select options={limit} placeholder="Auto (Recommended)" />
            </div>
          </div>
          <div className="create-tasks__buttons">
            <a className="create-tasks__cancel" onClick={closeModal}>
              Cancel
            </a>
            <a className="create-tasks__save" onClick={save}>
              <span>Add Task</span>
            </a>
          </div>
        </form>
      </Modal>
    </>
  );
});

export default TasksModal;
