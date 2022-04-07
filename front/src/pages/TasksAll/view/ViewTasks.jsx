import React, { useState } from "react";
import { Link } from "react-router-dom";
import TasksModal from "./TasksModal/TasksModal";
import "./ViewTasks.scss";
import { useDispatch } from "react-redux";
import { changeGasRapidPrice } from "slices/appSlice";

const ViewTasks = React.memo((props) => {
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
                    <img src="assets/images/tasks-img.svg" alt="" />
                  </div>
                  <div className="tasks-view__text">
                    <p>{count} Tasks</p>
                    <span>Current created tasks</span>
                  </div>
                </div>
                <Link to={"/manage-task"} className="tasks-view__btn button">
                  <span>Manage Tasks</span>
                </Link>
              </div>
              <div className="tasks-view__navs">
                <div className="tasks-view__nav" onClick={(e) => handleTask(e)}>
                  <div className="tasks-view__nav--img">
                    <img src="assets/images/create.svg" alt="" />
                  </div>
                  <div className="tasks-view__nav--text">Create Task</div>
                </div>
                <div className="tasks-view__nav">
                  <div className="tasks-view__nav--img">
                    <img src="assets/images/start.svg" alt="" />
                  </div>
                  <div className="tasks-view__nav--text">Start</div>
                </div>
                <div className="tasks-view__nav">
                  <div className="tasks-view__nav--img">
                    <img src="assets/images/stop.svg" alt="" />
                  </div>
                  <div className="tasks-view__nav--text">Stop</div>
                </div>
                <div className="tasks-view__nav">
                  <div className="tasks-view__nav--img">
                    <img src="assets/images/delete.svg" alt="" />
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
      <TasksModal
        modalIsOpen={modalTask}
        closeModal={() => setIsModalTask(false)}
      ></TasksModal>
    </>
  );
});

export default ViewTasks;
