import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import FixitHeader from "./component/FixItHeader/FixitHeader";
import HomePage from "./component/HomePage/HomePage";
import FixersList from "./component/FixersList/FixersList";
import Footer from "./component/Footer/Footer";

function App() {
  const [postcode, setPostcode] = useState("EC2A3QA"); // TODO: change to dynamic if have time

  return (
    <div className="app">
      <FixitHeader />
      <main className="app__main">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/fixers"
            render={() => <FixersList postcode={postcode} />}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
