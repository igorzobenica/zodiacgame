import styled from 'styled-components';
import font from './extensions/font';

const color = '#2c3647';

const Page = styled.main`
  ${font()};
  color: ${color};
  margin: 0 auto;
  max-width: 61rem;
  padding: 5rem 0.5rem;
`;

Page.defaultProps = {
  theme: {
    Page: {
      backgroundColor: 'white',
      color: 'gray',
    },
  },
};

Page.displayName = 'Page';

export default Page;
