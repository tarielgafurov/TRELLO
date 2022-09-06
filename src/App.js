// import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./App.css";
import RegistrPage from "./components/registrationPages/RegistrPage";
import BodyPageTrello from "./components/trelloPages/trelloBody/BodyPageTrello";

function App() {
  const isLoaded = useSelector((store) => store.ui.isLoaded);
  console.log(isLoaded);
  return (
    <div className="App">
      {(isLoaded && <BodyPageTrello />) || <RegistrPage />}
    </div>
  );
}

export default App;
