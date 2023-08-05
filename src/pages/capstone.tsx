import React from "react"
import AppInner from "../components/AppInner/AppInner"
import BigTitle from "../components/BigTitle/BigTitle"
import TopMargin from "../components/TopMargin"

const Projects = () => (
    <AppInner>
        <TopMargin>
            <BigTitle>My Capstone</BigTitle>
            <br/>
            <p>
            PQP (short for Pourquoi-pas?) is a library for structural causal modeling in the tradition of Judea Pearl. The goal is to provide a set of software tools which modularize causal and parametric modeling, allowing researchers to more accurately assess the robustness of their models.
            </p>

            <p>
            The library provides a number of important features, focused on enabling performant and correct causal analysis.
            </p>
            
            <h2>Causal Modeling</h2>
            <p>
            When it comes to observational data, no causality in means no causality out. If you want to measure causal relationships between variables, you need to make assumptions about which variables are causally related and (more importantly) which are not. PQP makes it easy to specify causal assumptions graphically, making them easier to inspect and explain to non-experts.
            </p>

            <h2>Parametric Modeling and Estimation</h2>
            <p>
            PQP provides a class of general parametric estimators. These can fit to data with arbitrary structure and compute point estimates of causal quantities.
            </p>

            <h2>Robustness Checks</h2>
            <p>
            During an analysis, PQP generates a computational graph representing logical dependencies between steps in the analysis. Each step records any assumptions made by the underlying math and automatically suggests statistical tests the user can apply to test those assumptions. This makes it easy to check local assumptions as well as perform end-to-end robustness checks.
            </p>

        </TopMargin>
    </AppInner>
)

export default Projects