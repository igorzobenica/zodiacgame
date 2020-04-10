import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const spacing = '2.5rem 3.5rem';

const CardBody = styled.div`
  padding: ${({ noPadding }) => noPadding ? '0' : spacing};
`;

CardBody.defaultProps = {
  spacing: '2.5rem 3.5rem',
};

const Body = styled(CardBody)`
  ${({ autoSize }) =>
    !autoSize &&
    css`
      max-height: 50vh;
      overflow-x: hidden;
    `};
  ${({ textCenter }) =>
    textCenter &&
    css`
      text-align: center;
    `};
`;

Body.defaultProps = {
  noPadding: false,
  autoSize: false,
};

Body.propTypes = {
  noPadding: PropTypes.bool,
  autoSize: PropTypes.bool,
};

export default Body;
