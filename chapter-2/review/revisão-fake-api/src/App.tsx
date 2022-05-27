import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GloabalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GloabalStyle />
    </>
  );
}

