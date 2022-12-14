import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/home/Footer";
import Header from "./components/home/header/Header";
import HomePages from "./components/pages/HomePages";
import Pages from "./components/pageConent/Pages";
import Blog from "./components/pages/Blog";
import Portfolio from "./components/pages/Portfolio";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePages} />
          <Route path="/pages" exact component={Pages} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/potfolio" exact component={Portfolio} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
