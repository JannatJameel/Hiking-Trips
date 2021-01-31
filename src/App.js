import { Route, Switch } from "react-router";
import TripsList from "./components/TripsList";
import TripDetails from "./components/TripDetails";
import NavBar from "./components/Navbar";


function App() {

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path = "/trips/:tripSlug">
          <TripDetails/>
        </Route>
        <Route path = "/trips">
          <TripsList/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
