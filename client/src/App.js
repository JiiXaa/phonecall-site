import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Register } from './pages';
import { Navbar } from './components';

import styled from 'styled-components';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <WrapperStyled>
                <h1>Here Magic Happens! 😎</h1>
              </WrapperStyled>
            }
          ></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='*' element={<div>Error</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
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
