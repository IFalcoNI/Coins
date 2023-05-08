import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './Styles/App.css';
import Header from './Components/Header';
function App() {
  return (
    <div className='App'>
    <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>
            <Link to='signup'>SignUp</Link>
          </div>} />
          <Route path='signup' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
