import { Route, Switch } from "react-router-dom";
import "./App.scss";
import FixitHeader from "./component/FixItHeader/FixitHeader";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <FixitHeader />
      <Switch>{/* <Route to="/" component={} /> */}</Switch>
      <Footer />
    </div>
  );
}

export default App;
