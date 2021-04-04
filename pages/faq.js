/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FAQScreen from '../src/components/screens/FAQScreen';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
    const response = await res.json();
    return response.data;
  });

  // Falar sobre tamanho da página aqui e tomar cuidado com recursos extras que vão pra página
  return {
    props: {
      faqCategories,
    },
  };
}

function FAQPage(props) {
  return (
    <FAQScreen {...props} />
  );
}

export default WebsitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});
