import React from 'react';
import PropTypes from 'prop-types';
import MenuWrapper from './styles/MenuWrapper';
import Logo from '../../../theme/Logo';
import Button from '../Button/index';
import Text from '../../foundation/Text';

export default function Menu({ onClickCadastrar, isLoginPage }) {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Perguntas Frequentes',
      url: '/faq',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>{link.texto}</Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      {!isLoginPage && (
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">
          <Text />
          Entrar
        </Button>
        <Button variant="primary.main" onClick={onClickCadastrar}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
      )}
    </MenuWrapper>
  );
}

Menu.propTypes = {
  isLoginPage: PropTypes.bool,
  onClickCadastrar: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  isLoginPage: false,
};
