import * as React from 'react';
import { Layout } from '../components/Layout';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </Layout>
  );
};

export default IndexPage;