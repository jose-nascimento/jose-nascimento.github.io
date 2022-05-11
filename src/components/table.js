import React from 'react';
import Table from 'react-bootstrap/Table';
import { format } from 'date-fns';

function TableItem({ id, name, created_at, updated_at, pushed_at, html_url }) {
  return (
    <tr key={id} onClick={() => window.open(html_url, '_blank')}>
      <td>{name}</td>
      <td>{format(new Date(created_at), 'dd/MM/yyyy')}</td>
      <td>{format(new Date(updated_at), 'dd/MM/yyyy')}</td>
      <td>{format(new Date(pushed_at), 'dd/MM/yyyy')}</td>
    </tr>
  );
}

export default function RepoTable({ data, sort, changeSort }) {
  const { sort: param, direction } = sort;
  const arrow = direction === 'desc' ? 'down' : 'up';
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={() => changeSort(sort, 'full_name')}>
            Nome{' '}
            {param === 'full_name' && (
              <i className={`bi bi-caret-${arrow}-fill`}></i>
            )}
          </th>
          <th onClick={() => changeSort(sort, 'created')}>
            Data de Criação{' '}
            {param === 'created' && (
              <i className={`bi bi-caret-${arrow}-fill`}></i>
            )}
          </th>
          <th onClick={() => changeSort(sort, 'updated')}>
            Última Atualização{' '}
            {param === 'updated' && (
              <i className={`bi bi-caret-${arrow}-fill`}></i>
            )}
          </th>
          <th onClick={() => changeSort(sort, 'pushed')}>
            Último Push{' '}
            {param === 'pushed' && (
              <i className={`bi bi-caret-${arrow}-fill`}></i>
            )}
          </th>
        </tr>
      </thead>
      <tbody>{data.map((repo) => TableItem(repo))}</tbody>
    </Table>
  );
}
