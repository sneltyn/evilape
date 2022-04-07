import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";

import { useAppSelector } from "app/hooks";
import { allWallets } from "slices/waletsSlice";
import { addTaskAsync } from "slices/tasksSlice";
import { useAppDispatch } from "app/hooks";
import Field from "../../../components/Field/Field";
import Select from "../../../components/Select/Select";
import SlugStatsItem from "./SlugStatsItem";
import "./OpenseaModal.scss";
import CheckBox from "components/Checkbox/Checkbox";
import Radio from "components/Radio/Radio";

const OpenseaModal = React.memo((props) => {
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [params, setParams] = useState('');
  // const [cost, setCost] = useState('');
  // const [addres, setAddres] = useState('');
  // const [network] = useState('');
  // const [wallet] = useState('');

  const [state, setState] = useState({});
  const [slugInfo, setSlugInfo] = useState({
    slugImg: "https://ik.imagekit.io/bayc/assets/bayc-footer.png",
    slugTitle: "Bored Ape Yacht Club",
    slugStats: [
      {
        amount: "10k",
        itemTitle: "items",
      },
      {
        amount: "6.5k",
        itemTitle: "ovners",
      },
      {
        amount: "82",
        itemTitle: "floor price",
        ethSign: true,
      },
      {
        amount: "421.3k",
        itemTitle: "volume traded",
        ethSign: true,
      },
    ],
  });

  const wallets = useAppSelector(allWallets).map((item) => ({
    value: item.id,
    label: item.nickname,
  }));

  const trait = [
    {
      value: "Trait",
      label: "Trait",
    },
    {
      value: "Trait",
      label: "Trait",
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

  // const handleChangeOption = (val, name) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     [name]: val.value,
  //   }));
  // };

  // const handleChangeWallet = (val, name) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     walletId: val.value,
  //     wallet: val.label,
  //   }));
  // };

  const save = () => {
    // state.url = networks[state.network];
    // console.log(state);
    // dispatch(addTaskAsync(state));
    // closeModal();
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
      >
        <form className="modal create-monitor">
          <div className="modal__header">
            <div className="create-tasks__top">
              <img src="assets/images/create-task.svg" alt="" />
              <h2 className="modal__title title">New Monitor</h2>
            </div>
            <div className="modal__close" onClick={closeModal}>
              <img src="assets/images/modal-close.svg" alt="" />
            </div>
          </div>
          <div className="create-monitor__items">
            <div className="create-monitor__check-slug">
              <div className="create-monitor__check-slug-searchbox">
                <Field
                  label="Check Slug"
                  placeholder="Check Slug"
                  value={state.functionName}
                  onChange={(e) => handleChange(e, "functionName")}
                />
                <a className="create-monitor__check button" onClick={save}>
                  <span>Check</span>
                </a>
              </div>
              {/* <div className="create-monitor__slug-info">
                <div className="create-monitor__slug-present">
                  <img
                    className="create-monitor__slug-image"
                    src={slugInfo.slugImg}
                    alt=""
                  />
                  <h2 className="create-monitor__slug-title">
                    {slugInfo.slugTitle}
                  </h2>
                </div>
                <ul className="create-monitor__slug-stats-list">
                  {slugInfo.slugStats.map((props, i) => (
                    <SlugStatsItem key={"Slug-stats-item_" + i} {...props} />
                  ))}
                </ul>
              </div> */}
            </div>
            <div className="create-monitor__configure-slug">
              <div className="create-monitor__grid-input-table">
                <Field
                  label="Project Slug"
                  placeholder="Project Slug"
                  value={state.functionName}
                  onChange={(e) => handleChange(e, "functionName")}
                />
                <Field
                  label="Delay (milliseconds)"
                  placeholder="Delay (milliseconds)"
                  value={state.functionName}
                  onChange={(e) => handleChange(e, "functionName")}
                />
                <Field
                  label="Desired Price"
                  placeholder="Desired Price"
                  value={state.functionName}
                  onChange={(e) => handleChange(e, "functionName")}
                />
                <Field
                  label="Maximum Gas (GWEI)"
                  placeholder="Maximum Gas (GWEI)"
                  value={state.functionName}
                  onChange={(e) => handleChange(e, "functionName")}
                />
                <Field
                  label="Priority Fee (GWEI)"
                  placeholder="Priority Fee (GWEI)"
                  value={state.functionName}
                  onChange={(e) => handleChange(e, "functionName")}
                />
              </div>
              <div className="create-monitor__bottom-configuration">
                <div className="create-monitor__bottom-selections">
                  <Select
                    options={trait}
                    defaultValue={trait[0]}
                    placeholder="Trait"
                  />
                  <Select
                    options={wallets}
                    defaultValue={wallets[0]}
                    placeholder="Select a wallet"
                  />
                </div>
                <Field
                  placeholder="Password"
                  value={state.functionName}
                  onChange={(e) => handleChange(e, "functionName")}
                />
              </div>
              <div className="create-monitor__type-selection">
                <Radio checked name="type-selection">
                  Mainnet
                </Radio>
                <Radio name="type-selection">Flashbots</Radio>
              </div>
              <div className="create-monitor__buttons">
                <a
                  className="create-monitor__cancel button"
                  onClick={closeModal}
                >
                  Cancel
                </a>
                <a className="create-monitor__save button" onClick={save}>
                  <span>Add Task</span>
                </a>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
});

export default OpenseaModal;
