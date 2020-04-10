import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Dropdown } from "../../ui";
import { MEDIA_SMALL } from "../../ui/theme/tokens/breakpoints";

const FormWrapper = styled.div`
  @media (max-width: ${MEDIA_SMALL}px) {
    > button {
      float: right;
    }
  }
  @media (min-width: ${MEDIA_SMALL}px) {
    display: flex;
    > label {
      max-width: 30%;
      &:nth-child(2) {
        margin-left: 5rem;
      }
    }
    > button {
      &:last-child {
        margin-left: 5rem;
      }
    }
  }
  > label {
    > img {
      max-width:100%;
      max-height:100%;
      bottom: 1.75rem;
      position: relative;
    }
  }
`;

const LocationSelectors = ({location, setLocation, locationList, children}) => {
  const { t } = useTranslation();
  const [country, setCountry] = useState('');
  return (
    <FormWrapper>
      <Dropdown 
        shadow
        labelText={t('common.select_country')}
        width="100%"
        options={locationList.map(obj => obj.country).filter((item, index) => locationList.map(obj => obj.country).indexOf(item) === index).sort().map(item => ({label: item}))}
        value={country}
        onChange={value => {setCountry(value);setLocation(null)}}
      />
      {country && <Dropdown 
        shadow
        labelText={t('common.select_city')}
        width="100%"
        options={locationList.filter((obj) => obj.country === country.label)}
        value={location}
        onChange={value => {setLocation(value)}}
      />}
      {children}
    </FormWrapper>
  );
};

export default LocationSelectors;
