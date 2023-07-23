import React from "react"
import AppInner from "../components/AppInner/AppInner"
import { PageProps, graphql } from "gatsby"
import headFactory from "../components/Head"
import BigTitle from "../components/BigTitle/BigTitle"

export const Head = headFactory({title: "Projects"})

export const pageQuery = graphql`
  query eachProject($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`

type ProjectType = {
    frontmatter: {
        title: string
        slug: string
        date: string
    }
    html: string
}

const ProjectPage: React.FC<PageProps<Queries.eachProjectQuery>> = ({data}) => {
    return (
        <AppInner>
            <div>
                <BigTitle>
                    {data.markdownRemark?.frontmatter?.title || "Todo: Title"}
                </BigTitle>
            </div>
            <div dangerouslySetInnerHTML={{__html: data.markdownRemark?.html || ""}}/>
        </AppInner>
    )
}

export default ProjectPage