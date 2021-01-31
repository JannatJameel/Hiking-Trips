import { Link } from "react-router-dom";

const Trip  = ({trip})=>{
    
  return ( 
    <div className="row-col mb-4">
    <div className="card" style={{width: "18rem"}}>
        <img src={trip.image} class="card-img-top" alt={trip.name}/>
      <div className="card-body">
          <h5 className="card-title">{trip.name}</h5>
          <p className="card-text">Location: {trip.city}</p>
          <Link to = {`/trips/${trip.slug}`}>
            <button type="button" className="btn btn-outline-secondary">Trip Details</button>
          </Link>
      </div> 
    </div> 
  </div> 
  );      
};

export default Trip;