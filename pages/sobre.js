import React from 'react';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/foundation/Text';
import Button from '../src/components/commons/Button';
import Grid from '../src/components/foundation/layout/Grid';
import Box from '../src/components/foundation/layout/Box/index';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/patterns/FormCadastro';

export default function Sobrescreen() {
  const [isModalOpen, setModalState] = React.useState(false);
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
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalState(false)}
      >
        {(propsModal) => (
          <FormCadastro
            onClickCloseCadastro={() => setModalState(false)}
            propsModal={propsModal}
          />
        )}
      </Modal>

      <Menu
        onClickCadastrar={() => setModalState(true)}
      />

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
              Pagina Sobre
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
              Go Back
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
}
