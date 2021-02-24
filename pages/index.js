import Head from 'next/head'
import styled from "styled-components"

const Content = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  
`

function Home() {
  return (
    <>
      <Head>
        <title>Home Section</title>
      </Head>
      <Content>
        <h1>Jack of all trades, master of none.</h1>
      </Content>
    </>
  )
}

export default Home;