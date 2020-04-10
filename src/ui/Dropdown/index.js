import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withTheme } from 'styled-components';
import { SubmitLong as imageLong } from '../Background';
import { Label } from '../../ui';

import {
  SelectContainer,
  Control,
  ValueContainer,
  Placeholder,
  SingleValue,
  Menu,
  Option,
} from './components/index';
const noPadding = provided => ({ ...provided, padding: '0' });

const Dropdown = ({ components, labelText, ...props }) => (
  <Label text={labelText} position="top">
    <Select
      {...props}
      styles={{
        menuPortal: provided => ({ ...provided, zIndex: 4000 }),
        indicatorSeparator: () => ({ display: 'none' }),
        menuList: noPadding,
      }}
      components={{
        SelectContainer,
        Control,
        ValueContainer,
        Placeholder,
        SingleValue,
        Option,
        Menu,
        ...components,
      }}
    />
    <img src={imageLong} alt=""/>
  </Label>
);

Dropdown.propTypes = {
  inlineLabel: PropTypes.string,
  isSearchable: PropTypes.bool,
  shadow: PropTypes.bool,
  width: PropTypes.string,
};

Dropdown.defaultProps = {
  menuPortalTarget: document.body,
  inlineLabel: '',
  isSearchable: false,
  width: '16rem',
  theme: {},
};

export default withTheme(Dropdown);
