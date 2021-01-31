import { Route, Switch } from "react-router";
import TripsList from "./components/TripsList";
import TripDetails from "./components/TripDetails";
import NavBar from "./components/Navbar";
import { useState } from "react";
import data from "./data";


function App() {
  const [trip, setTrip] = useState("");
  
  


  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path = "/trips/:tripSlug">
          <TripDetails trips={data} />
        </Route>
        <Route path = "/trips">
          <TripsList settTrip={setTrip}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
