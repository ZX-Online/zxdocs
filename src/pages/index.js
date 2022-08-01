import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

		<h2>ZX Spectrum Hardware</h2>

		<div className="row">
		<div className={clsx('col col--4')}>
        	<div className={styles.buttons}>
          		<Link
	            	className="button button--secondary button--lg"
    	        	to="/docs/zxspectrum">
        			ZX Spectrum Classic
    	    	</Link>
	    	</div>
		</div>
		<div className={clsx('col col--4')}>
			<div className={styles.buttons}>
          		<Link
	            	className="button button--secondary button--lg"
    	        	to="/docs/zxnext">
        			ZX Spectrum Next
    	    	</Link>
	    	</div>
		</div>
		<div className={clsx('col col--4')}>
			<div className={clsx('col col--4')}>
				<div className={styles.buttons}>
        	  		<Link
	        	    	className="button button--secondary button--lg"
    	        		to="/docs/tsconf">
        				ZX Evolution / TS Conf
    	    		</Link>
	    		</div>
			</div>
		</div>
		</div>

		<h2>Software &amp; IDE</h2>

		<div className="row">
		<div className={clsx('col col--4')}>
        	<div className={styles.buttons}>
          		<Link
	            	className="button button--secondary button--lg"
    	        	to="/docs/borielzxbasic">
        			Boriel ZX Basic
    	    	</Link>
	    	</div>
		</div>
		<div className={clsx('col col--4')}>
		</div>
		<div className={clsx('col col--4')}>
		</div>
		</div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
