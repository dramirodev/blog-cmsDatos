/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import SEO from './seo';
import {Global, css} from '@emotion/core';
import Header from './Header';

const Layout = props => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }

          body {
            font-size: 1.6rem;
            line-height: 2;
            font-family: 'Roboto', sans-serif;
            color: #272727;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }

          h1,
          h2 {
            font-family: 'Monserrat', sans-serif;
            font-weight: 300;
          }

          h3 {
            font-family: 'Roboto', sans-serif;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
          }

          img {
            max-width: 100%;
          }

          .container {
            max-width: 120rem;
            width: 95%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      />
      <SEO />
      <Header location={props.location} />
      <main>
        <div className="container">{props.children}</div>
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
