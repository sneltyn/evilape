import React from "react";
import Laoyut from "../../../components/Layout/Layout";
import ViewTasks from "../view/ViewTasks";
import "./TasksEmpty.scss";

const TasksEmpty = React.memo((props) => {
  return (
    <>
      <Laoyut page="Tasks">
        <ViewTasks />
        <div className="tasks">
          <div className="wallet">
            <div className="container">
              <div className="wallet__inner">
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
              </div>
            </div>
          </div>
        </div>
      </Laoyut>
    </>
  );
});

export default TasksEmpty;
