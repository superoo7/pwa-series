import React from 'react';
import Link from 'gatsby-link';
import DisqusThread from '../shared/DisqusThread';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>🚀 Progressive Web App Series</h1>
        <em>
          By{' '}
          <a
            target="_blank"
            href="https://www.wenghan.me/about-me?q=pwa%20blog"
          >
            Lai Weng Han
          </a>
        </em>
        <p>
          This blog is a video series on Progressive Web Apps. Read more about{' '}
          <a href="/c2-1-intro-to-pwa">Progressive Web App (PWA)</a>
        </p>
        <hr />
        <h3>Demo of Progressive Web App</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/esfi7ZLibmk"
          frameborder="0"
          gesture="media"
          allow="encrypted-media"
          allowfullscreen
        />
        <ul>
          {this.props.data.allMarkdownRemark.edges.map(post => (
            <li key={post.node.frontmatter.chapter}>
              <Link to={post.node.frontmatter.path}>
                {post.node.frontmatter.chapter} {post.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <DisqusThread id="Home" title="Homepage" path="/" />
      </div>
    );
  }
}
export const postQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { published: { eq: true } } }
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
  }
`;
