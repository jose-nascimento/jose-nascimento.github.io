import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '../pagination';

describe('teste do componente de paginação', () => {
  it('deve exibir botões de anterior e próximo', () => {
    const component = render(<Pagination />);

    expect(component.queryByText('< Anterior')).toBeTruthy();
    expect(component.queryByText('Próximo >')).toBeTruthy();
  });

  it('deve exibir botão de próximo como ativo', () => {
    const component = render(<Pagination hasNext={true} />);

    expect(component.queryByText('Próximo >')).toHaveClass('active');
  });

  it('deve permitir voltar ao clicar no botão anterior', () => {
    const goBack = jest.fn();
    const component = render(<Pagination hasBack={true} goBack={goBack} />);

    fireEvent.click(component.getByText('< Anterior'));

    expect(goBack).toHaveBeenCalled();
  });

  it('não deve permitir clicar em botão desabilitado', () => {
    const goBack = jest.fn();
    const component = render(<Pagination goBack={goBack} />);

    fireEvent.click(component.getByText('< Anterior'));

    expect(goBack).not.toHaveBeenCalled();
  });
});
