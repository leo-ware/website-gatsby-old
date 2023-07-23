import React from "react"

import { PageProps } from "gatsby"
import styled from "styled-components"

import headFactory from "../components/Head"
import AppInner from "../components/AppInner/AppInner"
import BigTitle from "../components/BigTitle/BigTitle"
import Link from "../components/Link"

export const Head = headFactory({ title: "Portfolio of Leo Ware" })

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 350px;
    // background-color: red;
`

const LeftAlignDiv = styled.div`
    width: 100%;
    text-align: left;
    margin-top: 25px;
    margin-bottom: 10px;
    margin-left: 15px;
    font-size: 1rem;
    font-weight: bold;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`

const Button = styled.button`
    width: 120px;
    height: 50px;
    border-radius: 25px;
    background-color: black;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    padding: 0 20px;
    margin: 20px 8px;
`

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Main>
            <Container>
                <BigTitle style={{margin: 0}}>Hi, I'm Leo.</BigTitle>
                {/* <LeftAlignDiv>Show me:</LeftAlignDiv> */}
                <ButtonContainer>
                    <Link to="/about">
                        <Button>about me</Button>
                    </Link>
                    <Link to="/projects">
                        <Button>fun stuff</Button>
                    </Link>
                </ButtonContainer>
            </Container>
        </Main>
    )
}

export default IndexPage