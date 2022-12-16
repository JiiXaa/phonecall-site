import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Register, Error, Dashboard } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
