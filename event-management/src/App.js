import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Eventlist from "./components/Eventlist";

function App() {
  return (
    <div>
      <Eventlist />
    </div>
  );
}

export default App;
