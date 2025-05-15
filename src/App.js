import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Bar from './components/Bar/Bar';
import KursValyut from './components/KursValyut/KursValyut';
import Profile from './components/Profile/Profile';
import Xabarlar from './components/Xabarlar/Xabarlar';
import Tulovlar from './components/Tulovlar/Tulovlar';
import Kontragentlar from './components/Kontragent/Kontragent';




function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-layout">
        <Bar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/KursValyut" element={<KursValyut />} />
            <Route path="/Xabarlar" element={<Xabarlar />} />
            <Route path="/Tulovlar" element={<Tulovlar />} />
            <Route path="/Kontragentlar" element={<Kontragentlar />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
