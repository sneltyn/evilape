import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeGasRapidPrice } from "./../../slices/appSlice";
import OpenseaModal from "./components/OpenseaModal";

import "./Header.scss";
import TaskImg from "assets/images/tasks-img.svg";
import CreateImg from "assets/images/create.svg";
import StartImg from "assets/images/start.svg";
import StopImg from "assets/images/stop.svg";
import DeleteImg from "assets/images/delete.svg";

const Header = React.memo((props) => {
  const dispatch = useDispatch();

  const [modalTask, setIsModalTask] = useState(false);
  const [gasRapid, setGasRapid] = useState("");

  const handleTask = (e) => {
    e.preventDefault();
    setIsModalTask(true);
  };

  const up = () => {
    dispatch(changeGasRapidPrice(gasRapid));
    setGasRapid("");
  };

  const { isUpdate, count } = props;

  return (
    <>
      <div className={`tasks-view ${isUpdate ? "tasks-view-update" : ""}`}>
        <div className="container">
          <div className="tasks-view__inner">
            <div className="tasks-view__aside">
              <div className="tasks-view__info">
                <div className="tasks-view__content">
                  <div className="tasks-view__img">
                    <img src={TaskImg} alt="" />
                  </div>
                  <div className="tasks-view__text">
                    <p>{count} Tasks</p>
                    <span>Current created tasks</span>
                  </div>
                </div>
                <Link to={"/manage-task"} className="tasks-view__btn">
                  <span>Manage Tasks</span>
                </Link>
              </div>
              <div className="tasks-view__navs">
                <div className="tasks-view__nav" onClick={(e) => handleTask(e)}>
                  <div className="tasks-view__nav--img">
                    <img src={CreateImg} alt="" />
                  </div>
                  <div className="tasks-view__nav--text">Create Task</div>
                </div>
                <div className="tasks-view__nav">
                  <div className="tasks-view__nav--img">
                    <img src={StartImg} alt="" />
                  </div>
                  <div className="tasks-view__nav--text">Start</div>
                </div>
                <div className="tasks-view__nav">
                  <div className="tasks-view__nav--img">
                    <img src={StopImg} alt="" />
                  </div>
                  <div className="tasks-view__nav--text">Stop</div>
                </div>
                <div className="tasks-view__nav">
                  <div className="tasks-view__nav--img">
                    <img src={DeleteImg} alt="" />
                  </div>
                  <div className="tasks-view__nav--text">Delete</div>
                </div>
              </div>
            </div>
            {isUpdate ? (
              <div className="tasks-view__update">
                <div className="tasks-view__update--item">
                  <span>Force Gas (GWEI)</span>
                  <span className="field__input">
                    <input
                      type="text"
                      placeholder="Gas (GWEI)"
                      value={gasRapid}
                      onChange={(item) => setGasRapid(item.target.value)}
                    />
                  </span>
                </div>

                <a className="tasks-view__update--btn button" onClick={up}>
                  Update
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <OpenseaModal
        modalIsOpen={modalTask}
        closeModal={() => setIsModalTask(false)}
      ></OpenseaModal>
    </>
  );
});

export default Header;
