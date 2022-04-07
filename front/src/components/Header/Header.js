import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import "./Header.scss";
import { useAppSelector } from "./../../app/hooks";
import { allTasks } from "./../../slices/tasksSlice";

const Header = React.memo((props) => {
  const { page } = props;

  const tasks = useAppSelector(allTasks);

  const nav = [
    {
      icon: "task-logo.svg",
      page: "Tasks",
      link: "/tasks",
    },
    {
      icon: "wallet-logo.svg",
      page: "Wallets",
      link: "/wallet",
    },
    {
      icon: "settings-logo.svg",
      page: "Opensea",
      link: "/opensea",
    },
    {
      icon: "timer-logo.svg",
      page: "Latest Minting",
      link: "/minting",
    },
    {
      icon: "settings-logo.svg",
      page: "Settings",
      link: "/settings",
    },
  ];

  return (
    <>
      <div className="header">
        <div className="container">
          {/* <div className="header__top">
            <div className="header__dots">

            </div>
            <div className="header__top--title">
            Aspide.io
            </div>
          </div> */}
          <div className="header__inner">
            <div className="header__info">
              <div className="header__logo">
                {/* <img src="assets/images/logo.png" width={40} alt="" /> */}
              </div>
              <div className="header__navs">
                {nav.map((el) => {
                  return (
                    <Link
                      key={el.page}
                      className={`header__nav ${
                        page === el.page ? "active" : ""
                      }`}
                      to={el.link}
                    >
                      <ReactSVG src={`assets/images/${el.icon}`} alt="" />
                      <span>{el.page}</span>
                      {el.page === "Tasks" && (
                        <div className="header__nav--number">
                          {tasks.length}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="header__settings">
              <div className="header__settings--logo">
                <img src="assets/images/support-logo.svg" alt="" />
              </div>
              <span className="header__settings--name">Support</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Header;
