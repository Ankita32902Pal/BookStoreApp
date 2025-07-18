import React from 'react';
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";
/*import Login from './Components/Login';*/



function App() {
  return (
    <>
  
    <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path="/course" element={<Courses />}/>
      <Route path = "/contact" element={<Contact/>} />
      {/*<Route path="/" element={<Login />} />*/}
      <Route path = "/signup" element={<Signup />}/>

    </Routes>
    </>
  );
}

export default App;