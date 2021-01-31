import { Route, Switch } from "react-router";
import TripsList from "./components/TripsList";
import AllTrips from "./components/AllTrips";
import TripDetails from "./components/TripDetails";
import NavBar from "./components/Navbar";

function App() {

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path = "/">
          <AllTrips/>
        </Route>
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
