import { Logo,  NavTrip} from "../styles";

const NavBar = ({setAll}) => {
    return (
      <nav className="navbar navbar-expand" style={{backgroundColor: "#c5c5c5"}}>
        <Logo exact to="/trips">
          <h2>ADVENTURES!</h2>
        </Logo>
        <div className="navbar-nav ml-auto">
          <NavTrip to="/trips" onClick={()=> setAll(true)}>All Trips</NavTrip>
        </div>
      </nav>
    );
  };
  
  export default NavBar;