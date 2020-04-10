import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from '../../ui';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
`;

const FooterButtons = ({
  linkBack,
  linkNext,
  labelNext,
  justifyContent,
  onClick,
  onClickHint,
  isDisabled,
}) => {
  const { t } = useTranslation();
  return (
    <Wrapper justifyContent={justifyContent}>
      {linkBack && <Button as={Link} to={linkBack}>
        {t('common.back')}
      </Button>}
      {onClickHint && <Button onClick={onClickHint}>
        {t('common.hint')}
      </Button>}
      {(linkNext || onClick) && <Button as={!onClick && Link} to={linkNext} onClick={onClick} disabled={isDisabled}>
        {labelNext || t('common.submit')}
      </Button>}
    </Wrapper>
  );
};

FooterButtons.propTypes = {
  linkBack: PropTypes.string,
  linkNext: PropTypes.string,
};

FooterButtons.defaultProps = {
  justifyContent: 'space-around',
  isDisabled: false,
};

export default FooterButtons;
