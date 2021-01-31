import { Logo,  NavTrip} from "../styles";

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand">
        <Logo exact to="/trips">
          <h1>Hicking Trips</h1>
        </Logo>
        <div className="navbar-nav ml-auto">
          <NavTrip to="/trips">Trips</NavTrip>
        </div>
      </nav>
    );
  };
  
  export default NavBar;