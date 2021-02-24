import NavBar from "./NavBar"
import Footer from "./Footer"
import styled from "styled-components"

const GridWrap = styled.div`

  display: grid;
  grid-template-rows: 65px 1fr 70px;
  height: 100vh;
  grid-gap: 10px;
`

export default function Layout({children}){
  
  return (
    <GridWrap>
      <NavBar />
      {children}
      <Footer />
    </GridWrap>
    )
}