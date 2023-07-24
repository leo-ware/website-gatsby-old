import React from "react"
// @ts-ignore
import * as styles from "../styles/about.module.css"

import Link from "../components/Link"
import AppInner from "../components/AppInner/AppInner"

import { StaticImage } from "gatsby-plugin-image"
import headFactory from "../components/Head"

export const Head = headFactory({ title: "About - Leo Ware" })

const About: React.FC = () => {
    return (
        <AppInner>
            <div className={styles.main}>
                <div className={styles.box + " " + styles.boxLeft}>
                    <StaticImage
                        src={"../images/me-sitting.png"}
                        width={275}
                        alt={"picture of Leo"}
                        loading={"eager"}/>
                </div>
                <div className={styles.box + " " + styles.boxRight}>
                    <h1 className={styles.title}>About Me</h1>
                    <div className={styles.text}>
                        I'm Leo. I'm a 22 y/o college student studying Data Science and 
                        Statistics at Minerva University. I'm interested in causal inference,
                        computational statistics, and data visualization. Check out my projects
                        or reach out below.
                    </div>
                    <div className={styles.imgContainer}>
                            <Link to={"https://github.com/leo-ware"}>
                                <StaticImage
                                    className={styles.logo}
                                    src={"../images/github.png"}
                                    alt={"github logo"}
                                    width={30}
                                    loading={"eager"}/>
                            </Link>
                            <Link to={"https://www.linkedin.com/in/leo-ware-8b8580b6/"}>
                                <StaticImage
                                    className={styles.logo}
                                    src={"../images/li_bw.png"}
                                    alt={"linkedin logo"}
                                    width={30}
                                    loading={"eager"}/>
                            </Link>
                            <Link to={"https://t.me/leoware"}>
                                <StaticImage
                                    className={styles.logo}
                                    src={"../images/tg_bw.png"}
                                    alt={"telegram logo"}
                                    width={30}
                                    loading={"eager"}/>
                            </Link>
                            <Link to={"https://medium.com/@leoware"}>
                                <StaticImage
                                    className={styles.logo}
                                    src={"../images/md_bw.png"}
                                    alt={"medium logo"}
                                    width={30}
                                    loading={"eager"}/>
                            </Link>
                    </div>
                </div>
            </div>
        </AppInner>
    )
}


export default About