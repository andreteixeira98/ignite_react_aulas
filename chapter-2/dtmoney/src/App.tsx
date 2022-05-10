import React from 'react';
import styled from 'styled-components';
import { GloabalStyle } from './styles/global';

const Title = styled.h1`
  font-size: 64px;;
  color:#08067e;
`

export function App() {
  return (
    <div className="App">
      <Title>
        Hello World
      
      </Title>

      <GloabalStyle />
    </div>
  );
}

