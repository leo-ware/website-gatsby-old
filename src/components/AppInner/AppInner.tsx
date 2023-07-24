import React from "react"
import "./AppInner.css"

import Grid from "../Grid"
import { WindowContextProvider } from "../../context/WindowContext"

type AppInnerType = {
    children: React.ReactNode
}

const AppInner: React.FC<AppInnerType> = (props) => {
    return (
        <WindowContextProvider>
            <Grid>
                {props.children}
            </Grid>
        </WindowContextProvider>
    )
}

export default AppInner