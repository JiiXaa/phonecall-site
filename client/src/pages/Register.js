import styled from 'styled-components';

const Register = () => {
  return (
    <WrapperStyled>
      <h1>Register</h1>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    color: black;
  }
`;

export default Register;
