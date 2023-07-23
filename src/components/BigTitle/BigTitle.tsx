import React from "react"
// @ts-ignore
import * as styles from "./BigTitle.module.css"

type BigTitleType = {
    children: string
    style?: React.CSSProperties
    className?: string
}

const BigTitle: React.FC<BigTitleType> = (props) => (
    <div style={props.style} className={styles.main + " " + props.className}>
        <h1 className={styles.title}>{props.children}</h1>
    </div>
)

export default BigTitle