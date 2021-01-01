import React from 'react';
import Card from './components/shared/Card';

export default function App(props) {
  return (
    <div className="cards">
      <Card title='Exemplo'> Primeiro cartão </Card>
      <Card title='Exemplo'> Primeiro cartão </Card>
      <Card title='Exemplo'> Primeiro cartão </Card>
      <Card title='Exemplo'> Primeiro cartão </Card>
      <Card title='Exemplo'> Primeiro cartão </Card>
    </div>
  );
}