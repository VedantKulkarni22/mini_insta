import '../Styles/App.css';
import React from 'react'
import ComingSoon from './ComingSoon';
import UploadVideo from './UploadVideo';
import UploadImage from './UploadImage';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login/>}>
          </Route>
          <Route exact path="/login" element={<Login/>}>
          </Route>
          <Route exact path="/signup" element={<SignUp/>}>
          </Route>
          <Route exact path="/home" element={<Home/>}>
          </Route>
          <Route exact path="/uploadimg" element={<UploadImage/>}>
          </Route>
          <Route exact path="/uploadvid" element={<UploadVideo/>}>
          </Route>
          <Route exact path="/comingsoon" element={<ComingSoon/>}>
          </Route>
        </Routes>
      </div>
</Router>
  );
}

export default App;
