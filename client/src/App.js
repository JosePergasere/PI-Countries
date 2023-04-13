import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Home, Landing, Form, Detail } from "./views";
import NavBar from "./components/NavBar/NavBar";

function App() {
  //* Hook para saber donde estoy parado
  const location = useLocation();
  //* Si no estoy en "/", que muestre la Navbar
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/home" render={() => <Home />} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/create" component={Form} />
    </div>
  );
}

export default App;
