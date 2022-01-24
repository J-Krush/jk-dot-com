import React, { useState, useEffect } from "react"

import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
// import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "../components/contact"
import Skills from "../components/skills"
// import Stats from "../components/stats"

const Cara = () => {  
  return (
      <Layout>
        <Parallax pages={4}>
          <Hero offset={0} factor={1} />
          <Skills  offset={1} factor={1} />
          {/* <Stats offset={2} factor={2} /> */}
          {/* <Projects offset={3} factor={2} /> */}
          <About offset={2} factor={1} />
          <Contact offset={3} factor={1} />
        </Parallax>
      </Layout>
    )
 }

export default Cara
