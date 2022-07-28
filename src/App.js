import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/" component={App} />
      </Switch>
    </div>
  );
}

export default App;
