import data from "../data";
import Trip from "./Trip";
import SearchBar from "./SearchBar";
import { ListWrapper, Search } from "../styles";
import { useState } from "react";
import LengthBar from "./LengthBar";
import DropDown from "./DropDown";


const TripsList  = ({all})=>{
    const [query, setQuery] = useState("");
    const [length, setLength] = useState([200]);
    const [difficulty, setDifficulty] = useState("");
    

    

    const tripsList = data
    .filter((trip) =>
    trip.name.toLowerCase().includes(query.toLowerCase()))

    .filter((trip) => (trip.length < length) && (trip.difficulty === difficulty))

    .map((trip) => (
        <Trip key = {trip.id} trip={trip}/>
    ));
    
    let allList;
    if (all){
    allList =data.map((trip) => (
          <Trip key = {trip.id} trip={trip}/>
        
    ));
    }
    else{
        allList=tripsList
    }

    

    

    return (
        <div className="container">
        <Search style={{marginTop: "30px"}}>
            <SearchBar setQuery={setQuery}/>
            <DropDown setDifficulty={setDifficulty}/>
        </Search>
        <Search>
            <p>Trip distance: {length} km</p>
        </Search>
            <LengthBar length={length} setLength={setLength}/>
            <div className="row row-cols-auto" style={{marginLeft: "8em"}}>
               {allList}
                {/* <ListWrapper></ListWrapper> */}
            </div>
        </div>
    );
};

export default TripsList;