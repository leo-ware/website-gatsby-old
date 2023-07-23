import * as React from "react"
import { Link, PageProps } from "gatsby"
import AppInner from "../components/AppInner/AppInner"
import BigTitle from "../components/BigTitle/BigTitle"
import headFactory from "../components/Head"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <AppInner>
        <BigTitle>404: Not Found</BigTitle>
        <p>We cant't find the page you are looking for. <Link to="/">Go home</Link></p>
    </AppInner>
  )
}

export default NotFoundPage

export const Head = headFactory({ title: "404: Not Found" })
