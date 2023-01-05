import logo from './logo.svg';

import './App.css';
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Chat from './components/Chat';
import More from './components/More';

function App() {
  return (
    <div style={{ flex: "100%" }} >
      <Router>
        <Header></Header>

        <div style={{ maxWidth: "100%" }} className="container bg-blue-100 h-full rounded-lg relative  ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/More" element={<More />} />
          </Routes>
        </div>
        <Footer ></Footer>
      </Router>
    </div>
  );
}

export default App;
