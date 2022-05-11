import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from '../table';

describe('teste da tabela de repos', () => {
  it('exibe header da tabela', () => {
    const component = render(<Table sort={{}} data={[]} />);

    expect(component.queryByText('Nome')).toBeTruthy();
  });

  it('renderiza elementos da array de dados', () => {
    const component = render(
      <Table
        sort={{}}
        data={[
          {
            id: '1',
            name: 'test repo',
            created_at: '2018-10-11T03:53:53Z',
            updated_at: '2018-12-14T22:49:57Z',
            pushed_at: '2021-02-23T10:42:27Z',
          },
        ]}
      />
    );

    expect(component.queryByText('test repo')).toBeTruthy();
    expect(component.queryByText('11/10/2018')).toBeTruthy();
    expect(component.queryByText('14/12/2018')).toBeTruthy();
    expect(component.queryByText('23/02/2021')).toBeTruthy();
  });

  it('aciona changeSort ao clicar no header', () => {
    const changeSort = jest.fn();
    const component = render(
      <Table sort={{}} data={[]} changeSort={changeSort} />
    );
    fireEvent.click(component.getByText('Nome'));
    expect(changeSort).toHaveBeenCalled();
  });
});
