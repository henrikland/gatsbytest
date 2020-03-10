import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
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
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/" state={data}>
        Go to page 2
      </Link>
      <h1>
        {data
          ? data.prismic.allActivitys.edges[1].node.title[0].text
          : "no data"}
      </h1>
    </Layout>
  )
}

export default IndexPage
