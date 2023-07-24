import React, { createContext, useEffect, useState } from "react"

type WindowContextType = {
    mobile: boolean
}

const context = createContext<WindowContextType>({mobile: false})

export const useWindowContext = () => (
    React.useContext(context)
)

export const WindowContextProvider: React.FC<{children?: React.ReactNode}> = (props) => {
    const [mobile, setMobile] = useState(false)
    const ref = React.useRef(typeof window !== "undefined" && window)

    const listener = () => {
        if (ref.current && ref.current.innerWidth >= 600) {
            setMobile(false)
        } else {
            setMobile(true)
        }
    }

    useEffect(() => {
        ref.current = window
        if (ref.current) {
            listener()
            ref.current.addEventListener("resize", listener)
            return () => {
                if (ref.current) {
                    ref.current.removeEventListener("resize", listener)
                }
            }
        }
    }, [ref.current])

    return (
        <context.Provider value={{mobile}}>
            {props.children}
        </context.Provider>
    )
}