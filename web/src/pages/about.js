import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About me" />
    <h1>Jeg heter Anna Li Meyer!</h1>
    <p>Velkommen til min side!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
