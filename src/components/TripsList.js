import data from "../data";
import Trip from "./Trip";
import SearchBar from "./SearchBar";
import { ListWrapper } from "../styles";
import { useState } from "react";
import Range from "./Range";


const TripsList  = ({setTrip})=>{
    const [query, setQuery] = useState("");
    const [length, setLength] = useState(0);

    const tripsList = data
    .filter((trip) =>
    trip.name.toLowerCase().includes(query.toLowerCase())
    )

    .filter((trip) =>
    trip.length>length
    )

    .map((trip) => (
    <div className="col">
        <Trip key = {trip.id} trip={trip} setTrip={setTrip}/>
        </div>
    ));

    return (
        <>
            <SearchBar setQuery={setQuery}/>
            <Range setLength={setLength}/>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <ListWrapper>{tripsList}</ListWrapper> 
            </div>
        </>
    );
};

export default TripsList;