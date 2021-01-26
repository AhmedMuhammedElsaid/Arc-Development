import React from "react";
import {  ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import Footer from "./ui/Footer";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            component={() => <div style={{ height: "2200px" }}> Home Page</div>}
          />
          <Route
            exact
            path="/services"
            component={() => <div> Service Page</div>}
          />
          <Route
            exact
            path="/customsoftware"
            component={() => <div> Custom Software Apps Page</div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div> Mobile Apps Page</div>}
          />
          <Route
            exact
            path="/website"
            component={() => <div> Website Page</div>}
          />
          <Route
            exact
            path="/revolution"
            component={() => <div> Revolution Page</div>}
          />
          <Route exact path="/about" component={() => <div> About Page</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div> Contact Page</div>}
          />
          <Route
            exact
            path="/estimate"
            component={() => <div> estimate Page</div>}
          />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
