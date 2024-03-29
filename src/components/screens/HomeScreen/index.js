import React from 'react';
import Image from 'next/image';
import Text from '../../foundation/Text';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Button from '../../commons/Button';
import { WebsitePageContext } from '../../wrappers/WebsitePage';

export default function HomeScreen() {
  const WebsitePageContextHome = React.useContext(WebsitePageContext);
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '76px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
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
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text>

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => {
                WebsitePageContextHome.toggleModalCadastro();
              }}
            >
              Cadastrar
            </Button>
          </Grid.Col>

          <Grid.Col
            offset={{ xs: 0, md: 0 }}
            value={{ xs: 12, md: 6 }}
          >
            <Image src="/img/phones.png" alt="" width="386" height="575" />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

// FAQScreen.propTypes = {
// };
