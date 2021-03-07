import React from 'react';
import styled from 'styled-components';
import Box from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import Button from '../../commons/Button/index.js';
import TextField from '../../forms/TextField';

function FormContent() {

    const [userInfo, setUserInfo] = React.useState({
        username: '',
        email:'',
    });

    function handleChange(event) {
        const fieldName = event.target.getAttribute('name');
        setUserInfo({
            ...userInfo,
            [fieldName]:event.target.value,
        })
    }

    const isFormInvalid = userInfo.email.length === 0 || userInfo.username.length === 0;

    return (
        <form
            style={{
                position:'relative',
            }}
            onSubmit={(event) => {
                event.preventDefault();
                console.log('Lets submit this form, right?');
            }}
        >
            <Box
                style={{
                    position:'absolute',
                    top:'-5%',
                    right:0,
                }}
            >
                X
            </Box>
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
            <div>
                <TextField 
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={userInfo.email}
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

export default function FormCadastro({ propsModal }) {
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
                    <FormContent />
                </Box>
            </Grid.Col>
        </Grid.Row>
    );
}
