import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Error = () => {
  return (
    <WrapperStyled>
      <div>
        {/* <img src={img} alt='page not found' /> */}
        <h3>Ups! page not found</h3>
        <p>Page you are looking for does not exist.</p>
        <Link to='/'>Home</Link>
      </div>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--textColor);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Error;
