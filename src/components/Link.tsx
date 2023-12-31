import styled from "styled-components"
import {Link as GLink} from "gatsby"

const Link = styled(GLink)`
    text-decoration: none;
    color: inherit;

    &:hover {
        color: grey;
    }
`

export default Link