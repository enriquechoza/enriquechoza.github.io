import * as React from 'react';
import { Layout } from '../components/layout';

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <p>Hola mundo</p>
    </Layout>
  )
}

export default IndexPage
