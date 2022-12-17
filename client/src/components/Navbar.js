import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <WrapperStyled>
      <p>🎄FestiveFriends</p>
      <ul>
        <li>
          <Link to='/homepage'>Home</Link>
        </li>
        <li>
          <Link to='/'>Dashboard</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.nav`
  position: fixed;
  width: 100%;
  height: 3rem;
  background-color: var(--primaryColor-50);
  display: flex;
  align-items: center;

  p {
    margin-left: 1rem;
  }

  ul {
    padding: 0;
    display: flex;
    align-items: space-between;
    margin: 0 auto;

    li {
      &:first-child {
        padding-left: 0;
      }
      padding-left: 1rem;
    }
  }
`;

export default Navbar;
