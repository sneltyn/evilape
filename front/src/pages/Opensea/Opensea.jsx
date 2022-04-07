import React, { useState } from "react";
import { useAppSelector } from "./../../app/hooks";
import { allTasks, deleteTaskAsync } from "slices/tasksSlice";
import { useDispatch } from "react-redux";

import Laoyut from "../../components/Layout/Layout";
import CheckBox from "../../components/Checkbox/Checkbox";
import Header from "./Header";

import "./Header.scss";

let i = 0;

const Opensea = React.memo((props) => {
  const dispatch = useDispatch();
  const [wallet, setWallet] = useState("Metamask 2");

  const tasks = useAppSelector(allTasks);

  return (
    <>
      <Laoyut page="Opensea">
        <Header isUpdate={true} count={tasks.length} />
        <div className="tasks">
          <div className="container">
            <div className="tasks__inner">
              <div className="tasks__table">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div className="tasks__table--checked"></div>
                      </th>
                      <th>Wallet</th>
                      <th>Project</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((item) => (
                      <tr>
                        <td>
                          <CheckBox />
                        </td>
                        <td>{item.contractAddress}</td>
                        <td>{item.network}</td>
                        <td>{item.wallet}</td>
                        <td className="blue">
                          {item.status
                            ? `Included in Block: ${item.block}`
                            : ""}
                        </td>
                        <td>
                          <div className="tasks__actions">
                            <a className="tasks__actions--play">
                              <img src="assets/images/task-play.svg" alt="" />
                            </a>
                            <a
                              className="tasks__actions--delete"
                              onClick={() => dispatch(deleteTaskAsync(item.id))}
                            >
                              <img
                                src="assets/images/delete-brown.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Laoyut>
    </>
  );
});

export default Opensea;
