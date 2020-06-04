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
            font-family: 'Merriweather', serif;
            color: #272727;
            letter-spacing: 0.015em;
            word-spacing: 0.001em;
            -webkit-font-smoothing: antialiased; /* Chrome, Safari */
            -moz-osx-font-smoothing: grayscale; /* Firefox */
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
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
          }

          h3 {
            font-family: 'Merriweather', serif;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
            color: #003d5c;

            &:hover {
              text-decoration: underline;
            }
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
      <Header />
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
