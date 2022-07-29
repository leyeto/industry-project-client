import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import FixitHeader from "./component/FixItHeader/FixitHeader";
import HomePage from "./component/HomePage/HomePage";
import FixersList from "./component/FixersList/FixersList";
import FixerProfile from "./component/FixerProfile/FixerProfile";
import Footer from "./component/Footer/Footer";

function App() {
  const [postcode, setPostcode] = useState("EC2A3QA"); // TODO: change to dynamic if have time

  const SVGIcon = (props) => (
    <svg className={props.className} pointerEvents="none">
      <use xlinkHref={props.href} />
    </svg>
  );

  return (
    <div className="app">
      <FixitHeader />
      <main className="app__main">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/fixers"
            exact
            render={() => <FixersList postcode={postcode} />}
          />
          <Route path="/fixers/1" render={() => <FixerProfile />} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
