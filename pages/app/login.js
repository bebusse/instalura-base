import React from 'react';
import Text from '../../src/components/foundation/Text';
import Button from '../../src/components/commons/Button';
import Grid from '../../src/components/foundation/layout/Grid';
import Box from '../../src/components/foundation/layout/Box/index';
import WebsitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function LoginScreen() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/img/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >

      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '76px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 0 }}
            value={{ xs: 12, md: 12 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
            marginBottom={{
              xs: '40px',
              md: '0px',
            }}
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'center',
              }}
            >
              Pagina de Login
            </Text>
            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              href="/"
            >
              Voltar
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

    </Box>
  );
}

export default WebsitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    menuProps: {
      display: false,
    },
    pageBoxProps: {
      backgroundImage: 'url(/img/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
