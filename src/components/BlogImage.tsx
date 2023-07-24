import React from "react"

const BlogImage: React.FC<any> = (props) => {
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            foo
            <img src={props.src} style={{maxWidth: "100%"}}/>
        </div>
    )
}

export default BlogImage