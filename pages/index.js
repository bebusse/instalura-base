import HomeScreen from '../src/components/screens/HomeScreen';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

// export default function Home() {
//   return (
//     <WebsitePageWrapper
//       seoProps={{
//         headTitle: 'Home',
//       }}
//       menuProps={{
//         display: true,
//       }}
//       pageBoxProps={{
//         backgroundImage: 'url(/img/bubbles.svg)',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'bottom right',
//       }}
//     >
//       <HomeScreen />
//     </WebsitePageWrapper>
//   );
// }

export default WebsitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    menuProps: {
      display: true,
    },
    pageBoxProps: {
      backgroundImage: 'url(/img/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
