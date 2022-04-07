import React from 'react';
import ReactSelect from 'react-select';
import './Select.scss';

const Select = React.memo((props) => {
  return (
    <ReactSelect
      {...props}
      className="react-select"
      classNamePrefix="react-select"
    />
  );
});

export default Select;
