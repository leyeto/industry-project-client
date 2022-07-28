import { Route, Switch } from "react-router-dom";
import "./App.scss";
import FixitHeader from "./component/FixItHeader/FixitHeader";

function App() {
  return (
    <div className="App">
      <FixitHeader />
      <Switch>{/* <Route to="/" component={} /> */}</Switch>
    </div>
  );
}

export default App;
