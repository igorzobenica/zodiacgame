import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const spacing = '2.5rem 3.5rem';

const CardBody = styled.div`
  padding: ${spacing};

  ${({ noPadding }) =>
    noPadding &&
    css`
      padding: 0;
    `};
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
