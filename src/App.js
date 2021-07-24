import React from "react";

//routes
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//css
import "./App.css";

//components
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

//context api
import { useGlobalContext } from "./context";

function App() {
  const { modal } = useGlobalContext();
  if (modal) {
    return <Modal />;
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
