import React from 'react'
import Link from 'gatsby-link'
const IndexPage = ({data}) => (
  <div>
    <h1>Progressive Web App Series</h1>
    <em>By Lai Weng Han</em>
    <hr/>
    <ul>
        {data.allMarkdownRemark.edges.map(post => (
            <li key={post.node.frontmatter.chapter}><Link to={post.node.frontmatter.path}>{post.node.frontmatter.chapter} {post.node.frontmatter.title}</Link></li>
        ))}
    </ul>
  </div>
)

export default IndexPage

export const postQuery = graphql`
query IndexQuery{
  allMarkdownRemark(
    limit: 10
    filter: {frontmatter: { published: { eq: true } } }
	sort: { fields: [frontmatter___chapter], order: ASC }
    ) {
    edges {
      node {
        id
        frontmatter {
          path
          title
          chapter
          date
        }
      }
    }
  }
}`
