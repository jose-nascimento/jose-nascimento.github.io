import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Toolbar from '../toolbar';

describe('testa componente de toolbar', () => {
  it('deve renderizar seleção de filtros', () => {
    const component = render(<Toolbar />);

    expect(component.queryByLabelText('Filtros:')).toBeTruthy();
  });

  it('filtro deve ter owner como default', () => {
    const component = render(<Toolbar />);

    expect(component.getByRole('option', { name: 'Dono' }).selected).toBe(true);
  });

  it('deve exibir 3 opções', () => {
    const component = render(<Toolbar />);

    expect(component.getAllByRole('option').length).toBe(3);
  });

  it('deve permitir ao usuário mudar o filtro selecionado', () => {
    const setFilter = jest.fn();
    const component = render(<Toolbar setFilter={setFilter} />);

    fireEvent.change(component.getByLabelText('Filtros:'), {
      target: { value: 'all' },
    });

    expect(setFilter).toHaveBeenLastCalledWith('all');
  });

  it('deve renderizar input de busca', () => {
    const component = render(<Toolbar />);

    expect(component.queryByLabelText('Busca:')).toBeTruthy();
  });

  it('deve permitir ao usuário digitar busca', () => {
    const setSearch = jest.fn();
    const component = render(<Toolbar setSearch={setSearch} />);

    fireEvent.change(component.getByLabelText('Busca:'), {
      target: { value: 'busca' },
    });

    expect(setSearch).toHaveBeenLastCalledWith('busca');
  });
});
