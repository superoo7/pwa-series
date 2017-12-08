import React from 'react'
import Link from 'gatsby-link'
import DisqusThread from '../shared/DisqusThread'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1>🚀 Progressive Web App Series</h1>
        <em>By Lai Weng Han</em>
        <hr/>
        <ul>
          {this.props.data.allMarkdownRemark.edges.map(post => (
              <li key={post.node.frontmatter.chapter}><Link to={post.node.frontmatter.path}>{post.node.frontmatter.chapter} {post.node.frontmatter.title}</Link></li>
          ))}
        </ul>
        <hr />
        <DisqusThread id="Home"
                      title="Homepage"
                      path="/" />

          
    </div>
    )
  }
}


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
