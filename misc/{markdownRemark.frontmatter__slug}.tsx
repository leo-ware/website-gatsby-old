import React from "react"

import 'katex/dist/katex.min.css';
import { MDXProvider } from "@mdx-js/react"

import AppInner from "../components/AppInner/AppInner"
import { PageProps, graphql } from "gatsby"
import headFactory from "../components/Head"
import BigTitle from "../components/BigTitle/BigTitle"
import TopMargin from "../components/TopMargin"

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

const ProjectPage: React.FC<PageProps<Queries.eachProjectQuery>> = ({data}) => {
    return (
        <AppInner>
            <MDXProvider>
                <TopMargin>
                    <div>
                        <BigTitle>
                            {data.markdownRemark?.frontmatter?.title || "Todo: Title"}
                        </BigTitle>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: data.markdownRemark?.html || ""}}/>
                </TopMargin>
            </MDXProvider>
        </AppInner>
    )
}

export default ProjectPage