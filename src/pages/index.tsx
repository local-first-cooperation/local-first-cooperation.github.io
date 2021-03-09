import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import styled from 'styled-components';

const cards = [
  {
    title: `The why and the what`,
    imageUrl: 'img/plant.svg',
    description: (
      <>
        Learn about the aspiration and use-cases for this novel paradigm for
        software design.
      </>
    ),
    to: '/docs',
  },
  {
    title: 'The five principles',
    imageUrl: 'img/act.svg',
    description: (
      <>
        Meet the five design principles on which to build resilient, cooperative
        software systems.
      </>
    ),
    to: '/docs/principles',
  },
  {
    title: 'Join the community',
    imageUrl: 'img/user.svg',
    description: (
      <>
        Join the community of developers and end-users trying to build a more
        resilient world.
      </>
    ),
    to: '/docs/community',
  },
];

const testimonials = [
  {
    name: `Dr. Martin Kleppmann`,
    title: `Professor @ Cambridge`,
    imageUrl:
      'https://v2.docusaurus.io/assets/ideal-img/hector-ramos.28a5b05.200.jpg',
    quote: `Open source contributions to the React Native docs have skyrocketed after our move to Docusaurus. The docs are now hosted on a small repo in plain markdown, with none of the clutter that a typical static site generator would require. Thanks Slash!`,
  },
  {
    name: `Adam Wiggins`,
    title: `Co-Founder @ Heroku`,
    imageUrl:
      'https://v2.docusaurus.io/assets/ideal-img/ricky-vetter.d899907.200.jpg',
    quote: `Docusaurus has been a great choice for the ReasonML family of projects. It makes our documentation consistent, i18n-friendly, easy to maintain, and friendly for new contributors.`,
  },
  {
    name: `Dr. Roland Kuhn`,
    title: `Co-Founder @ Actyx`,
    imageUrl:
      'https://v2.docusaurus.io/assets/ideal-img/christopher-chedeau.0290f26.200.jpg',
    quote: `I've helped open source many projects at Facebook and every one needed a website. They all had very similar constraints: the documentation should be written in markdown and be deployed via GitHub pages. I’m so glad that Docusaurus now exists.`,
  },
];

const Card = ({ imageUrl, title, description, to }) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="col col--4">
      <div className="card shadow--lw">
        {imgUrl && (
          <div>
            <img className={styles.cardImage} src={imgUrl} alt={title} />
          </div>
        )}
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <a href={to}>Learn more</a>
        </div>
      </div>
    </div>
  );
};

const Testimonial = ({ imageUrl, name, title, quote }) => (
  <div className="col col--4">
    <div className="avatar avatar--vertical">
      <img
        className={clsx(
          'avatar__photo',
          'avatar__photo--xl',
          styles.testimonialImage
        )}
        src={imageUrl}
      />
      <div className="avatar__intro">
        <h4 className="avatar__name">{name}</h4>
        <small className="avatar__subtitle">{title}</small>
        <small className={clsx('avatar__subtitle', styles.testimonialQuote)}>
          {quote}
        </small>
      </div>
    </div>
  </div>
);

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Local-First Cooperation - Let's build a more resilient world"
    >
      <header className={clsx('hero', 'hero--primary', styles.heroBanner)}>
        <div className="container">
          <img className={styles.heroLogo} src="/img/logo-full-on-blue.png" />
          <h1 className="hero__title">Let's build a more resilient world</h1>
          <p className="hero__subtitle">
            We strive to enable the robust cooperation between nearby computing
            devices. We are a community of developers and end users developing
            and applying the local-first cooperation paradigm.
          </p>
        </div>
      </header>
      <main>
        <section className={styles.cards}>
          <div className="container">
            <div className="row">
              {cards.map((props, idx) => (
                <Card key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <section className={styles.testimonials}>
          <div className="container">
            <div className="row">
              {testimonials.map((props, idx) => (
                <Testimonial key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
