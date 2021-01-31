import data from "../data";
import Trip from "./Trip";

const TripsList  = ()=>{

    const tripsList = data
    .map((trip) => (
        <Trip key = {trip.id} trip={trip}/>
    ));

    return (
        <div className="container" style={{marginTop: "40px"}}>
            <div className="row row-cols-auto" style={{marginLeft: "8em"}}>
                {tripsList}
            </div>
        </div>
    );
};

export default TripsList;