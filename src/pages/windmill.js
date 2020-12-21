import React from "react"

import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"

import WindmillMDX from "../content/windmill"

import WindmillImg1 from "../assets/windmill-1.jpg"
import WindmillImg2 from "../assets/windmill-2.jpeg"
import WindmillImg3 from "../assets/windmill-3.jpeg"

export default () => (
    <Layout>
        <Inner>
            <WindmillMDX />
            <img src={WindmillImg1} alt="Windmill performance" />
            <img src={WindmillImg2} alt="Windmill boys" />
            <img src={WindmillImg3} alt="Windmill parts" />
        </Inner>
    </Layout>
)