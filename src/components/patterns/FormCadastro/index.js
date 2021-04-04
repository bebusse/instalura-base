import React from 'react';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import Button from '../../commons/Button/index';
import TextField from '../../forms/TextField';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = React.useState({
    username: '',
    name: '',
  });

  const userDTO = {
    username: userInfo.username,
    name: userInfo.name,
  };

  //   function readData() {
  //     fetch('https://instalura-api.vercel.app/api/users')
  //       .then((responseServer) => responseServer.json())
  //       .then((responseProcessed) => {
  //       });
  //   }

  function submitData(data) {
    fetch('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((responseServer) => {
        if (responseServer.ok) {
          return responseServer.json();
        }
        throw new Error('Não foi possível cadastrar o usuário');
      })
      .then(() => {
        setSubmissionStatus(formStates.DONE);
      })
      .catch(() => {
        setSubmissionStatus(formStates.ERROR);
      });
  }

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.name.length === 0 || userInfo.username.length === 0;

  return (
    <form
      style={{
        position: 'relative',
      }}
      onSubmit={(event) => {
        event.preventDefault();
        setIsFormSubmitted(true);
        submitData(userDTO);
      }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      {isFormSubmitted && submissionStatus === formStates.DONE && (
      <Box
        textAlign="center"
      >
        <Text
          marginBottom={0}
        >
          Deu tudo certo! Excellent!!
        </Text>
        <Lottie
          width="100px"
          height="100px"
          style={{
            margin: '0 auto 10px auto',
          }}
          className="lottie-container basic"
          config={{ animationData: successAnimation, loop: false, autoplay: true }}
        />
      </Box>
      )}

      {isFormSubmitted && submissionStatus === formStates.ERROR && (
      <Box
        textAlign="center"
      >
        <Text
          marginBottom={0}
        >
          Deu tudo Errado :(
        </Text>
        <Lottie
          width="100px"
          height="100px"
          style={{
            margin: '10px auto',
          }}
          className="lottie-container basic"
          config={{ animationData: errorAnimation, loop: false, autoplay: true }}
        />
      </Box>
      )}

      <div>
        <TextField
          type="text"
          name="name"
          placeholder="Nome"
          value={userInfo.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          type="text"
          name="username"
          placeholder="Usuário"
          value={userInfo.username}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: 'auto',
          md: 'initial',
        }}
        fullWidth
        disabled={isFormInvalid}
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default function FormCadastro({ propsModal, onClickCloseCadastro }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        padding={{
          xs: '0',
          md: '0',
        }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
                    // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsModal}
        >

          <Box
            style={{
              position: 'absolute',
              top: 30,
              right: 30,
            }}
          >
            <Text variant="smallestException" tag="a" href="#" onClick={onClickCloseCadastro}><i className="icofont-close icofont-2x" /></Text>
          </Box>
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormCadastro.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  propsModal: PropTypes.object.isRequired,
  onClickCloseCadastro: PropTypes.func.isRequired,
};
