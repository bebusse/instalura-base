import SobreScreen from '../src/components/screens/SobreScreen';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export default WebsitePageHOC(SobreScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
    pageBoxProps: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundImage: 'url(/img/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
