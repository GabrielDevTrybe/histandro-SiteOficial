import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from '../App';
import Home from '../components/Home';
import renderWithRouter from './helper/renderWithRouter';

describe('Teste o componente <Home />', () => {
  it('Verifica se o titulo é renderizado na tela', () => {
    renderWithRouter(<Home />);

    const titulo = screen.getByRole('heading', {
      name: /histandro oficial/i
    })

    expect(titulo).toBeInTheDocument();
  })


});