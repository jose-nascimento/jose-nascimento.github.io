import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Main from '../main';

describe('testa componente principal', () => {
  it('deve renderizar toolbar e tabela', () => {
    const component = render(<Main />);

    expect(component.queryByRole('main')).toBeTruthy();
    expect(component.queryAllByRole('menu')).toBeTruthy();
    expect(component.queryAllByRole('table')).toBeTruthy();
  });

  it('deve carregar dados e exibir repositório "data vis"', async () => {
    const component = render(<Main />);

    const tableCell = await waitFor(() => component.getByText('data-vis'));

    expect(tableCell).toBeInTheDocument();
  });
});
