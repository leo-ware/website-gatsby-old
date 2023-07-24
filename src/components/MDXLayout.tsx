import React from "react"

import { PageProps } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import 'katex/dist/katex.min.css'

import AppInner from "../components/AppInner/AppInner"
import TopMargin from "./TopMargin"
import BigTitle from "./BigTitle/BigTitle"
import styled from "styled-components"
import BlogImage from "./BlogImage"
import { StaticImage } from "gatsby-plugin-image"

// reference for getting frontmatter
// https://noahgilmore.com/blog/gatsby-mdx-frontmatter/

const components = {}

const MDXLayoutContainer = styled.div`
    font-family: Arial;

    & a {
        color: black;
        text-decoration: underline;

        &:hover {
            color: darkgrey;
        }
    }

    & pre {
        background-color: #f5f5f5;
        padding: 10px;
        margin: 10px;
    }
    
    & p {
        line-height: 32px;
        font-size: 20px;
        font-family: "Georgia";

        @media (max-width: 600px) {
            line-height: 28px;
        }
    }

    & li {
        line-height: 32px;
        font-size: 20px;
        font-family: "Georgia";

        @media (max-width: 600px) {
            line-height: 28px;
        }
    }

    & img {
        object-fit: contain;
    }

    .gatsby-resp-image-wrapper {
        margin: 30px auto;
        max-height: 300px !important;
        max-width: 60% !important;
    }
`

const MDXLayout: React.FC<PageProps> = (props) => {
    return (
        <AppInner>
            <MDXProvider components={components}>
                <MDXLayoutContainer>
                    <TopMargin>
                        <BigTitle>
                            {(props.pageContext as any).frontmatter.title}
                        </BigTitle>
                        {props.children}
                    </TopMargin>
                </MDXLayoutContainer>
            </MDXProvider>
        </AppInner>
    )
}

export default MDXLayout