import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query allPostsQuery {
      allSanityPost {
        edges {
          node {
            id
            title
            _createdAt
          }
        }
      }
    }
  `)

  const posts = data.allSanityPost.edges;

  return (
    <Layout>
      <Seo title="Home" />
      {posts.map(post =>
        <article key={post.node.id}>
          {post.node._createdAt}
          <h2>{post.node.title}</h2>
        </article>
      )}

      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/about/">Om meg</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  );
}

export default IndexPage
