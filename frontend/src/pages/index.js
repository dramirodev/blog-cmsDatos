import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {css} from '@emotion/core';

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <div className="container">
      <div>
        <h1
          css={css`
            margin-top: 5.4rem;
          `}
        >
          Inicio
        </h1>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
