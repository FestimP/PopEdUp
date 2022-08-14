import styled from "styled-components";

function Nav() {
const Ul = styled.ul`
   list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  
 & li {
    float: left;
  }
  
 & li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
 & li a:hover:not(.active) {
    background-color: #111;
  }
  
 &  li .active {
    background-color: #04AA6D;
  }
`;
    return(
        <Ul>
        <ul>
     <li><a class="active" href="#home">Home</a></li>
     <li><a href="#news">News</a></li>
     <li><a href="#contact">Contact</a></li>
     <li><a href="#about">About</a></li>
        </ul>
</Ul>
    )
}
export default Nav;