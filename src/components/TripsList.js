import data from "../data";
import Trip from "./Trip";
import { ListWrapper } from "../styles";

const TripsList  = ()=>{
    const tripsList = data.map((trip) => (
    <div class="col">
        <Trip key = {trip.id} trip={trip}/>
        </div>

    ))
        return (
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <ListWrapper>{tripsList}</ListWrapper> 
               
               
            </div>
        );
};

export default TripsList;