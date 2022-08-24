import './App.css';
import { BrowserRouter, Route, Routes, Red, Navigate } from 'react-router-dom'
import MyTable from './pages/home';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} >
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<MyTable />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
