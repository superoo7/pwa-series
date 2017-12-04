import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="manifest" href="manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="superoo7" />
          <meta name="apple-mobile-web-app-title" content="superoo7" />
          <meta name="theme-color" content="#111111" />
          <meta name="msapplication-navbutton-color" content="#111111" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="icon" type="image/png" sizes="128x128" href="images/icons/icon-128x128.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="128x128" href="images/icons/icon-128x128.png" />
          <link rel="icon" type="image/png" sizes="144x144" href="images/icons/icon-144x144.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="images/icons/icon-144x144.png" />
          <link rel="icon" type="image/png" sizes="152x152" href="images/icons/icon-152x152.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="images/icons/icon-152x152.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="images/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="images/icons/icon-192x192.png" />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="/registerSw.js"></script>
        </body>
      </html>
    )
  }
}
