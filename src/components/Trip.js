
const Trip  = ({trip})=>{
    
  return ( 
  <div className="card" style={{width: "18rem"}}>
      <img src={trip.image} class="card-img-top" alt={trip.name}/>
    <div className="card-body">
        <h5 className="card-title">{trip.name}</h5>
        <p className="card-text">Location: {trip.city}</p>
        <a href="#" class="btn btn-primary">Trip Details</a>
    </div>
  </div>  
  );
      
};

export default Trip;