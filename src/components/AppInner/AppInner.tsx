import React from "react"
import Grid from "../Grid/Grid"
// import Content from "../Content/Content"
import { WindowContextProvider } from "../../context/WindowContext"

import "./AppInner.css"

type AppInnerType = {
    children: React.ReactNode
}

const AppInner: React.FC<AppInnerType> = (props) => {
    return (
        <main>
            <WindowContextProvider>
                <Grid>
                    {props.children}
                </Grid>
            </WindowContextProvider>
        </main>
    )
}

export default AppInner