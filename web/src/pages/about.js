import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    query allPostsQuery {
      allSanityAbout {
        edges {
          node {
            id
            title
            _rawBody
          }
        }
      }
    }
  `)

  return null
}

export default About
