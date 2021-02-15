import {MenuWrapper} from '../Menu/styles/MenuWrapper.js';
import Logo from '../../../theme/Logo';

export default function Menu()
{
    const links = [
        {
            texto: 'Home',
            url: '/'
        },
        {
            texto: 'Perguntas Frequents',
            url: '/faq'
        },
        {
            texto: 'Sobre',
            url: '/sobre'
        },
    ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo/>
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
          {links.map((link) => {
            return <li><a href={link.url}>{link.texto}</a></li>
          })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
          <button>Entrar</button>
          <button>Cadastrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}