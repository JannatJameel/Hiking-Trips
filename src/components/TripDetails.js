import { useParams } from "react-router-dom";
import { DetailWrapper , ListWrapper} from "../styles";
import data from "../data";


import Trip from "./Trip";


const TripDetail = ({trips}) => {
    
    const {tripSlug} = useParams();
    const trip = trips.find((trip) => trip.slug === tripSlug);
    

    let moretrip= data
    .filter((data)=> data.difficulty===trip.difficulty ) 
    .filter((data)=> data.name!==trip.name);
    


    let recommendation=moretrip.map((trip) => (
      <div className="col">
          <Trip key = {trip.id} trip={trip} />
          </div>
      ));



    return (
      <div>
        <DetailWrapper>

          <h1>{trip.name}</h1>
          <img src={trip.image} alt={trip.name} />
          <p>City: {trip.city}</p>
          <p>Difficulty: {trip.difficulty}</p>
          <p>Length: {trip.length}</p>
          <p>Rating: {trip.rating}</p>
        </DetailWrapper>

        <div className="row row-cols-1 row-cols-md-3 g-4">
           <ListWrapper>{recommendation}</ListWrapper> 
            </div>

      </div>
        
    )
};

export default TripDetail;