import { useParams } from "react-router-dom";
import { DetailWrapper, ListWrapper} from "../styles";
import data from "../data";
import Trip from "./Trip";

const TripDetail = () => {
  const {tripSlug} = useParams();
  const trip = data.find((trip) => trip.slug === tripSlug);
    
  let moretrip= data
  .filter((data)=> data.difficulty===trip.difficulty && data.name!==trip.name);
  
  let recommendation=moretrip.map((trip) => (
    <div className="col mb-4">
      <Trip key = {trip.id} trip={trip} />
    </div>
  ));

  return (
    <div>
      <DetailWrapper style={{marginTop: "2em" }}>
        <h1>{trip.name}</h1>
        <img src={trip.image} alt={trip.name} style={{marginRight: "2em" }}/>
        <div >
        <p>City: {trip.city}</p>
        <p>Difficulty: {trip.difficulty}</p>
        <p>Length: {trip.length} km</p>
        <p>Rating: {trip.rating}</p>
        </div>
      </DetailWrapper>
      <br/>
      <div   style={{marginTop: "10em" , marginLeft: "9em"}}>
        <h2>Other recommended trips:</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <ListWrapper>{recommendation}</ListWrapper> 
        </div>
      </div>

  </div>
  )
};

export default TripDetail;