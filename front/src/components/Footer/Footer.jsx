import React, { useEffect, useState } from "react";
import "./Footer.scss";
import { useAppSelector } from "./../../app/hooks";
import {
  selectBlock,
  selectGas,
  selectGasRapid,
  selectSeconds,
} from "./../../slices/appSlice";

import FooterImg from "assets/images/footer-img.svg";

const Footer = React.memo((props) => {
  const block = useAppSelector(selectBlock);
  const seconds = useAppSelector(selectSeconds);
  const gas = useAppSelector(selectGas);
  const gasRapid = useAppSelector(selectGasRapid);

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__info">
              <div className="footer__img">
                <img src={FooterImg} alt="" />
              </div>
              <div className="footer__current">
                <div className="footer__name">Current Gas</div>
                <div className="footer__content">
                  <div className="footer__content--item">
                    <p>Base Fee:</p>
                    <span>90 GWEI</span>
                  </div>
                  <div className="footer__content--item">
                    <p>Rapid Price:</p>
                    <span>90 GWEI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__time">
              Last block: {block}, {seconds} seconds ago
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Footer;
