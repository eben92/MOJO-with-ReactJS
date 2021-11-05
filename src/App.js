import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import MainHeader from "./components/main/MainHeader";
import MainBody from "./components/main/MainBody";
import About from "./components/sideBar/Routes/About";
import Footer from "./components/main/Footer";

function App() {
  return (
    <Router>
      <div className='App'>
        <aside className='side'>
          {/* sidebar */}
          <SideBar />
          {/* end of sidebar */}
        </aside>

        {/* main body */}
        <main>
          <div className='Main'>
            {/* // Header */}
            <MainHeader />
            <Route path='/' exact component={MainBody} />
            <Route path='/about' component={About} />
            <Footer />
          </div>
          {/* //end of header */}
        </main>

        {/* end of main */}
      </div>
    </Router>
  );
}

export default App;
