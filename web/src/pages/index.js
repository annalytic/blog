import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import urlBuilder from "@sanity/image-url";

import Layout from "../components/layout"
import Article from "../components/article"
import Seo from "../components/seo"

const urlFor = source =>
  urlBuilder({ projectId: "og13jxpg", dataset: "production" }).image(source);

const serializers = {
  types: {
    figure: props => (
      <figure>
        <img
          src={urlFor(props.node.asset)
            .width(600)
            .url()}
          alt={props.node.alt}
        />

        <figcaption>{props.node.caption}</figcaption>
      </figure>
    )
  }
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query allPostsQuery {
      allSanityPost {
        edges {
          node {
            id
            title
            _rawBody
            _createdAt(fromNow: true)
          }
        }
      }
    }
  `)

  const posts = data.allSanityPost.edges;

  return (
    <Layout>
      <Seo title="Home" />
      { posts.map( post =>
        <Article post={ post } serializers={ serializers } />
      ) }

      <p>
        <Link to="/about/">Om meg</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  );
}

export default IndexPage
