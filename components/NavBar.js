import styled from "styled-components"
import Link from "next/link"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background: #3d3d3d;
  width: 100vw;
  height: 65px;
  color: white;
  justify-content: space-evenly;
  align-items: center;
`

function NavBar() {
  
  return (
    <>
     <Nav>NavBar</Nav>
    </>
    )
}

export default NavBar;