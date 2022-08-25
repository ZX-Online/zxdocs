import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
		<div className="row">
			<div className={clsx('col col--4')}>
				
			</div>
			<div className={clsx('col col--8')}>
				<p className="hero__subtitle"><Translate>__site_tagline1__</Translate></p>
				<p><Translate>__site_tagline2__</Translate></p>
				<p><Translate>__site_tagline3__</Translate></p>
			</div>
		</div>

		<p className="hero__subtitle"><Translate>__site_tagline4__</Translate></p>

		<h2><Translate>ZX Spectrum Hardware</Translate></h2>

		<div className="row">
		<div className={clsx('col col--4')}>
			<div className={clsx('card', styles.cardmain)}>
				<div className="card__header">
					<h3><Translate>ZX Spectrum Classic</Translate></h3>
				</div>
				<div class="card__image">
   					<img
       					src="img/main/zxspectrum.jpg"
       					alt="ZX Spectrum Classic"
       					title="" />
   				</div>
			   <div className="card__body text--left">
					<p><Translate>Hardware and architecture of "Classic" models of ZX Spectrum developed in 1982-199x</Translate></p>
				</div>
				<div className="card__footer">
					<Link
	            		className="button button--secondary"
   		        		to="/docs/zxspectrum">
							<Translate>Read</Translate>
    		    	</Link>
				</div>
			</div>
		</div>
		<div className={clsx('col col--4')}>
			<div className={clsx('card', styles.cardmain)}>
				<div className="card__header">
					<h3><Translate>ZX Spectrum Next</Translate></h3>
				</div>
				<div class="card__image">
   					<img
       					src="img/main/zxnext.png"
       					alt="ZX Spectrum Next"
       					title="" />
   				</div>				
				<div className="card__body text--left">
					<p><Translate>Hardware and architecture of today's official ZX Spectrum successor</Translate></p>
				</div>
				<div className="card__footer">
					<Link
		            	className="button button--secondary"
    		        	to="/docs/zxnext">
							<Translate>Read</Translate>
	    			</Link>
				</div>
			</div>			
		</div>
		<div className={clsx('col col--4')}>
			<div className={clsx('card', styles.cardmain)}>
				<div className="card__header">
					<h3><Translate>ZX Evolution / TS Conf</Translate></h3>
				</div>
				<div class="card__image">
   					<img
       					src="img/main/tsconf.png"
       					alt="ZX Evolution / TS Conf"
       					title="" />
   				</div>
				<div className="card__body text--left">
					<p><Translate>Hardware and architecture of the most modern and advanced ZX Spectrum clone in the ex-USSR area</Translate></p>
				</div>
				<div className="card__footer">
					<Link
		            	className="button button--secondary"
    		        	to="/docs/tsconf">
							<Translate>Read</Translate>
	    			</Link>
				</div>
			</div>			
		</div>
		</div>

		<h2 className="margin-top--md"><Translate>Software &amp; IDE</Translate></h2>

		<div className="row">
		<div className={clsx('col col--4')}>
			<div className={clsx('card', styles.cardmain)}>
				<div className="card__header">
					<h3><Translate>Boriel ZX Basic</Translate></h3>
				</div>
				<div class="card__image">
   					<img
       					src="img/main/borielzxbasic.jpg"
       					alt="Boriel ZX Basic"
       					title="" />
   				</div>
				<div className="card__body text--left">
					<p><Translate>Modern replacement for the Sinclair ZX Basic. Compilable and very fast.</Translate></p>
				</div>
				<div className="card__footer">
					<Link
	            		className="button button--secondary"
   		        		to="/docs/borielzxbasic">
							<Translate>Read</Translate>
    		    	</Link>
				</div>
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
