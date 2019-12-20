import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero";
import Skills from "../components/skills";
import ProjectList from '../components/projectList';
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Skills />
    <ProjectList />
  </Layout>
)

export default IndexPage
