
import React , { Component } from "react";
import NavigationBar from "./components/navigationBar";
import Ingredient from "./components/ingredient";
import Homepage from "./components/homepage";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <main>
<<<<<<< HEAD
        <Ingredient/>
=======
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/ingredients">
                <Ingredient />
              </Route>
            </Switch>
          </React.Fragment>
        </Router>
>>>>>>> 955ddb7b620c244fb28b056097f248a2409a46b7
      </main>
    </div>
  );
}

export default App;
