import styled from 'styled-components';

function App() {
  return (
    <WrapperStyled>
      <h1>Here Magic Happens! 😎</h1>
    </WrapperStyled>
  );
}

const WrapperStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 3rem;
  }
`;

export default App;
