import { Route, Switch } from "react-router";
import TripsList from "./components/TripsList";
import TripDetails from "./components/TripDetails";
import NavBar from "./components/Navbar";
import { useState } from "react";


function App() {
  const [all,setAll]=useState(false);

  return (
    <div>
      <NavBar setAll={setAll}/>
      <Switch>
        <Route path = "/trips/:tripSlug">
          <TripDetails/>
        </Route>
        <Route path = "/trips">
          <TripsList all={all}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
