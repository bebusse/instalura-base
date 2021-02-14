import styled from 'styled-components'

function Title(props)
{
  return <h1>{props.children}</h1>;
}

export default function Home()
{
  return <Title>Instalura Base - Modulo 1</Title>
}