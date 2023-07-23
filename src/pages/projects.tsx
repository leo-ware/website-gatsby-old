import React from "react"
// @ts-ignore
import * as styles from "../styles/Projects.module.css"
import { PageProps, graphql } from "gatsby"

import headFactory from "../components/Head"
import Link from "../components/Link"
import BigTitle from "../components/BigTitle/BigTitle"
import AppInner from "../components/AppInner/AppInner"
import TopMargin from "../components/TopMargin"

export const Head = headFactory({title: "Projects"})

export const pageQuery = graphql`
    query projectsIndex {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        slug
                        description
                        thumbnail
                    }
                }
            }
        }
    }
`

const Projects: React.FC<PageProps<Queries.projectsIndexQuery>> = ({data}) => {

    const projects = data.allMarkdownRemark.edges.map((edge) => edge.node)

    return (
        <AppInner>
            <TopMargin>
                <div className={styles.main}>
                    <BigTitle>Projects</BigTitle>
                    {projects.map((project) => (
                        project && project.frontmatter &&
                        <div className={styles.projectWidgetContainer} key={project.id}>
                            <div className={styles.thumbnailContainer}>
                                <Link to={"/projects"}>
                                    <div style={{
                                        width: 60,
                                        height: 60,
                                    }}/>
                                    {/* <LazyImage
                                        className={styles.thumbnailContainerInner}
                                        imgClassName={styles.thumbnail}
                                        src={project.thumbnail || ""} 
                                        width={60}
                                        height={60}/> */}
                                </Link>
                            </div>
                            <div className={styles.projectTextContainer}>
                                <Link to={project.frontmatter.slug || "/404"} className={styles.projectLink}>
                                    {project.frontmatter.title}
                                </Link>
                                <div className={styles.projectDescription}>
                                    {project.frontmatter.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </TopMargin>
        </AppInner>
    )
}

export default Projects