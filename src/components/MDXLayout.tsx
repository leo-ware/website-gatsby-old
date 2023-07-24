import React from "react"
import 'katex/dist/katex.min.css'

import { MDXProvider } from "@mdx-js/react"
import AppInner from "../components/AppInner/AppInner"
import TopMargin from "./TopMargin"

const MDXLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <AppInner>
            <MDXProvider>
                <TopMargin>
                    {children}
                </TopMargin>
            </MDXProvider>
        </AppInner>
    )
}

export default MDXLayout