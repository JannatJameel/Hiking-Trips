import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";


export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
`;

export const SearchBarStyle = styled.input`
  padding: 0.5rem;
  margin: 1rem 1rem;
  display: block;
  width: 40%;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: "200px";
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const Logo = styled(Link)`
  padding: 10px;
  img {
    width: 10em;
  }
`;

export const NavTrip = styled(NavLink)`
  padding: 0.25em 1em;
  color: "Black";
  &.active {
    color: "Red";
  }
`;

export const Search = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const RecommendedList = styled.div`
  display: block;
  margin-top: "500px";
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;