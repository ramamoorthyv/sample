import React from 'react';
import { InputNumber } from 'antd';

const CurrencyInput = ({ input, children, value, ...rest }) => {
  return (
    <InputNumber
      value={value}
      min="0.01"
      step="0.01"
      formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
      style={{
        width: 110
      }}
      {...rest}
    />
  );
};

export default CurrencyInput;
