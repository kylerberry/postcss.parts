import styled from 'styled-components';
import { colors } from '../../constants';

export default styled.section`
  max-width: ${colors.maxWidth};
  margin: 0 auto;
  display: block;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 2em;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
  &:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
`;
