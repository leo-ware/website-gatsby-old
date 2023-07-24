import React from "react"
import 'katex/dist/katex.min.css'
import { InlineMath } from "react-katex"

export const X = () => <InlineMath math={"X"}/>
export const Y = () => <InlineMath math={"Y"}/>
export const Z = () => <InlineMath math={"Z"}/>

export const X_ = () => <InlineMath math={"x"}/>
export const Y_ = () => <InlineMath math={"y"}/>
export const Z_ = () => <InlineMath math={"z"}/>

export const ATE = () => <InlineMath math={"\\text{ATE}"}/>
export const CATE = () => <InlineMath math={"\\text{CATE}"}/>