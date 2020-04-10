import React from 'react';
import { components } from 'react-select';

const SingleValue = ({ children, selectProps, ...props }) => (
  <components.SingleValue {...props}>
    {selectProps.inlineLabel}
    {children}
  </components.SingleValue>
);

export default SingleValue;
