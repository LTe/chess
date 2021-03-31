import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Search from '../components/Search'
import './styles.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Personal chess notes">
      <header className={clsx('hero hero--primary', styles.heroBanner, 'header')}>
        <div className="container">
          <Search />
        </div>
      </header>
    </Layout>
  );
}

export default Home;
