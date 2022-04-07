import React from "react";
import './Checkbox.scss'

const CheckBox = React.memo((props) => {
  return (
    <>
      <label className="type-radio">
        <span className="type-radio__inner">
          <input type="checkbox" />
          <span></span>
        </span>
      </label>
    </>
  );
});

export default CheckBox;
