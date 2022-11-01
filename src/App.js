import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import ViewProject from './views/ViewProject';

import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/:projectId" element={<ViewProject />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
