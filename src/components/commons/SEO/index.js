import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function SEO({ headTitle, description, image }) {
  const baseTitle = 'Alura | Cursos online de Tecnologia';
  const baseDescription = 'Aprenda Programação, Front-end, Data Science, UX, DevOps, Marketing, Inovação e Gestão na maior plataforma de tecnologia do Brasil';
  const baseImage = 'https://www.alura.com.br/assets/img/alura-share.1616501197.png';
  const hasHeadTitle = Boolean(headTitle);
  const mainTitle = hasHeadTitle ? `${headTitle} | ${baseTitle}` : `${baseTitle}`;
  const mainDescription = description || baseDescription;
  const mainImage = image || baseImage;
  const url = 'https://www.alura.com.br/';
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{mainTitle}</title>
      <meta name="title" content={mainTitle} />
      <meta name="description" content={mainDescription} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={mainTitle} />
      <meta property="og:description" content={mainDescription} />
      <meta property="og:image" content={mainImage} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={mainTitle} />
      <meta property="twitter:description" content={mainDescription} />
      <meta property="twitter:image" content={mainImage} />
    </Head>
  );
}

SEO.propTypes = {
  headTitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  headTitle: '',
  description: '',
  image: '',
};
