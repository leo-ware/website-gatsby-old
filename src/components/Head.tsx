import React from "react"
import type { HeadFC } from "gatsby"

type HeadType = {
    title?: string
}

export const headFactory = (props: HeadType) => {
    const headComponent: HeadFC = () => (
        <>
            <title>{props.title || "Leo Ware"}</title>
        </>
    )
    return headComponent
}

export default headFactory