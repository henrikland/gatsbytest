import React from "react"
import { Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
{
  prismic {
    allActivitys {
      edges {
        node {
          level
          title
        }
      }
    }
  }
}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <StaticQuery
      query={query}
      render={(data) => {
        console.log('render', data);

        if (!data) return null;

        return <h1>{data.prismic.allActivitys.edges[1].node.title[0].text}</h1>
      }}
    />
  </Layout>
)

export default IndexPage
