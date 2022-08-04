//import logo from './logo.svg';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Contestlist from './Component/Contestlist';
import ContestApi from './Component/ContestApi';
import './App.css';
import Dashboard from './Component/Dashboard';
import Displaycard from './Component/Displaycard';
import About from './Component/About';
import ContestBar from './Component/ContestBar';
import Livecontest from './Component/Livecontest';
import Nocontest from './Component/Nocontest';
import Spinner from './Component/Spinner';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
   <div className="bgclass">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/codeforces" element={<Contestlist contestname="CODEFORCES" />} />
        <Route path="/codechef" element={<Contestlist contestname="CODECHEF" />} />
        <Route path="/atcoder" element={<Contestlist contestname="ATCODER" />} />
        <Route path="/leetcode" element={<Contestlist contestname="LEETCODE" />} />
        <Route path="/csacademy" element={<Contestlist contestname="CSACADEMY" />} />
        <Route path="/topcoder" element={<Contestlist contestname="TOPCODER" />} />
        <Route path="/facebook" element={<Contestlist contestname="FACEBOOK" />} />
        <Route path="/google" element={<Contestlist contestname="GOOGLE" />} />
        <Route path="/hackerrank" element={<Contestlist contestname="HACKERRANK" />} />
        <Route path="/hackerearth" element={<Contestlist contestname="HACKEREARTH" />} />
        <Route path="/ContestApi" element={<ContestApi />}/>
        <Route path="/About" element={<About/>} />
        <Route path="/Livecontest" element={<Livecontest/>} />
        <Route path="/Nocontest" element={<Nocontest/>}/>
        <Route path="/Spinner" element={<Spinner/>}/>
        
      </Routes>
      <Footer />
    </Router>
    </div>

  );
}

export default App;
