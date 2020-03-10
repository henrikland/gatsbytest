import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ location }) => (
	<Layout>
		<SEO title="Page two" />
		<h1>Hi from the second page</h1>
		<p>Welcome to page 2</p>
		<p>{location.state.prismic.allActivitys.edges[1].node.title[0].text}</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default SecondPage
