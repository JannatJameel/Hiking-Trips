import { useParams, Redirect } from "react-router-dom";
import { DetailWrapper } from "../styles";

const TripDetail = ({trips}) => {
    const {tripSlug} = useParams();
    const trip = trips.find((trip) => trip.slug === tripSlug);

    return (
        <DetailWrapper>
          <h1>{trip.name}</h1>
          <img src={trip.image} alt={trip.name} />
          <p>City: {trip.city}</p>
          <p>Difficulty: {trip.difficulty}</p>
          <p>Length: {trip.length}</p>
          <p>Rating: {trip.rating}</p>
        </DetailWrapper>
    )
};

export default TripDetail;