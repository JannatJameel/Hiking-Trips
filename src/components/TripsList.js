import data from "../data";
import Trip from "./Trip";
import SearchBar from "./SearchBar";
import { ListWrapper } from "../styles";
import { useState } from "react";


const TripsList  = ()=>{
    const [query, setQuery] = useState("");

    const tripsList = data
    .filter((trip) =>
    trip.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((trip) => (
    <div className="col">
        <Trip key = {trip.id} trip={trip}/>
        </div>
    ));

    return (
        <>
            <SearchBar setQuery={setQuery}/>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <ListWrapper>{tripsList}</ListWrapper> 
            </div>
        </>
    );
};

export default TripsList;