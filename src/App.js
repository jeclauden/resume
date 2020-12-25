import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";
import React, { useState } from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <Router>
        <Topbar isOpen={isOpen} handleIsOpen={handleIsOpen} />
        <Navbar handleIsOpen={handleIsOpen} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignInPage} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
