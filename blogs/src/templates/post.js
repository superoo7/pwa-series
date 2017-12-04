import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {
    const {markdownRemark: post} = data;
    // const post = data.markdownRemark;
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <p>by <a href="https://wenghan.me">Lai Weng Han</a> on <em>{post.frontmatter.date}</em></p>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
    )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }`;