import React from 'react';
import Helmet from 'react-helmet';
import DisqusThread from '../shared/DisqusThread'

export default class Template extends React.Component {
    constructor(props) {
      super(props)
    }

  
    render() {
    const {markdownRemark: post} = this.props.data
      return (
          <div>
              <h1>{post.frontmatter.title}</h1>
              <p>by <a href="https://wenghan.me">Lai Weng Han</a> on <em>{post.frontmatter.date}</em></p>
              <div dangerouslySetInnerHTML={{__html: post.html}} />
              <hr />
              <DisqusThread id={post.frontmatter.chapter}
                      title={post.frontmatter.title}
                      path={`https://pwa.wenghan.me${post.frontmatter.path}`} />
          </div>
      )
    }
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
        chapter
        date
      }
    }
  }`;