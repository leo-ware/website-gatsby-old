import React from "react"

import { PageProps, graphql } from "gatsby"
import { styled } from "styled-components"

import AppInner from "../../components/AppInner/AppInner"
import TopMargin from "../../components/TopMargin"
import BigTitle from "../../components/BigTitle/BigTitle"
import headFactory from "../../components/Head"
import Link from "../../components/Link"
import TagWidget from "../../components/TagWidget"

export const Head = headFactory({ title: "Blog - Leo Ware" })

export const pageQuery = graphql`
    query blogIndex {
        allMdx {
            nodes {
                id
                frontmatter {
                    title
                    description
                    slug
                    tags
                }
            }
        }
    }
`

const LinkBox = styled.div`
    margin: 20px 0;
    border-left: 2px solid black;
    padding-left: 10px;
`

const LinkTitle = styled.h3`
    margin: 5px 0;
`

const LinkDescription = styled.p`
    margin: 8px 0;
`

const TagsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
`

const Blog: React.FC<PageProps<Queries.blogIndexQuery>> = ({ data }) => {
    const nodes = data.allMdx?.nodes
    return (
        <AppInner>
            <TopMargin>
                <BigTitle>Blog</BigTitle>
                {nodes && nodes.map((node) => (
                    <LinkBox key={node.id}>
                        <Link to={node.frontmatter?.slug || "/blog"}>
                            <LinkTitle>
                                {node.frontmatter?.title}
                            </LinkTitle>
                        </Link>
                        <LinkDescription>
                            {node.frontmatter?.description}
                        </LinkDescription>
                        <TagsContainer>
                            {node.frontmatter?.tags?.filter(t => !!t).map((tag) => (
                                <TagWidget>{tag}</TagWidget>
                            ))}
                        </TagsContainer>
                    </LinkBox>
                ))}
                {/* <p>Todo: stuff here</p> */}
            </TopMargin>
        </AppInner>
    )
}

export default Blog