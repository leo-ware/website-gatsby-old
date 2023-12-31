import React, { useEffect, useState } from "react"
// @ts-ignore
import * as styles from "./Navbar.module.css"

import styled from "styled-components"

import Link from "../Link"
import { useWindowContext } from "../../context/WindowContext"

const NavbarLink: React.FC<{name: string}> = (props) => {
    return (
        <div className={styles.linkContainer}>
            <Link to={props.name.toLowerCase()} style={{textDecoration: "none"}}>
                <h2 className={styles.linkText}>{props.name}</h2>
            </Link>
        </div>
    )
}

const NavbarDropDownIcon: React.FC<{onClick?: () => void}> = (props) => {
    return (
        <div className={styles.dropdownIcon} onClick={props.onClick}>
            <div className={styles.bar}/>
            <div className={styles.bar}/>
            <div className={styles.bar}/>
        </div>
    )
}

const NavbarContainer = styled.div<{open?: boolean, scrolled?: boolean}>`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${(props) => "60px"};

    border-bottom: ${(props) => props.scrolled ? "1px solid grey" : "none"};

    background-color: white;
    z-index: 1000;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
`

const Navbar: React.FC<{scrolled: boolean}> = ({scrolled}) => {

    const {mobile} = useWindowContext()
    const [open, setOpen] = useState(false)

    if (!mobile && open) {
        setOpen(false)
    }

    return (
        <NavbarContainer scrolled={scrolled}>
            <div className={styles.nav + " " + (open && styles.navOpen)}>
                <div className={styles.left + " " + styles.lr}>
                    <div className={styles.name}>
                        <Link to={"/"}>
                            <h2>Leo Ware</h2>
                        </Link>
                    </div>
                </div>
                <div className={styles.right + " " + styles.lr}>
                    {mobile
                        ? <NavbarDropDownIcon onClick={() => setOpen(!open)}/>
                        : ["About", "Capstone", "Blog", "CV"].map((name) => (
                            <div key={name} className={styles.linkContainer}>
                                <Link to={"/" + name.toLowerCase()} style={{textDecoration: "none"}}>
                                    <h2 className={styles.linkText}>{name}</h2>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            {open &&
                <div className={styles.dd}>
                    {["About", "Projects", "Blog", "CV"].map((name) => (
                            <div className={styles.linkContainer}>
                                <Link to={name.toLowerCase()} className={styles.linkDD}>
                                    <h4 className={styles.linkText}>{name}</h4>
                                </Link>
                            </div>
                        ))}
                </div>}
        </NavbarContainer>
    )
}

export default Navbar
