import React, {useRef, useState} from "react"
import Navbar from "./Navbar/Navbar"

// @ts-ignore
import * as styles from "./Grid.module.css"
import { styled } from "styled-components"

type GridType = {
    children: React.ReactNode
}

const ContentOuter = styled.div`
    overflow-y: scroll;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`

const ScrollContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContentInner = styled.div`
    margin: 60px 0;
    width: 700px;
    max-width: 90%;
`

const Grid: React.FC<GridType> = (props) => {
    const contentOuterRef = useRef<null | HTMLDivElement>(null)

    const [scrolled, setScrolled] = useState(false)
    const [overScrolled, setOverScrolled] = useState(false)

    const handleScroll: React.EventHandler<React.UIEvent<HTMLDivElement>> = () => {
        const func = () => {
            if (contentOuterRef.current) {
                const scrollTop = contentOuterRef.current.scrollTop
                scrollTop
                    ? setScrolled(true)
                    : setScrolled(false)
                scrollTop > 200
                    ? setOverScrolled(true)
                    : setOverScrolled(false)
            }
        }

        (async () => setTimeout(func, 0))()
    }

    return (
        <ContentOuter ref={contentOuterRef} onScroll={handleScroll}>
            <Navbar scrolled={scrolled}/>
            <ScrollContainer>
                <ContentInner>
                    {props.children}
                </ContentInner>
            </ScrollContainer>
        </ContentOuter>
    )
}

export default Grid