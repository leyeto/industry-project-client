import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import FixitHeader from "./component/FixItHeader/FixitHeader";
import FixersList from "./component/FixersList/FixersList";
import Footer from "./component/Footer/Footer";

function App() {
  const [postcode, setPostcode] = useState("EC2A3QA");

  return (
    <div className="App">
      <FixitHeader />
      <Switch>
        {/* <Route path="/" component={} /> */}
        <Route
          path="/fixers"
          render={() => <FixersList postcode={postcode} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
