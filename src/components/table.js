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

export default function RepoTable({ data }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data de Criação</th>
          <th>Última Atualização</th>
          <th>Último Push</th>
        </tr>
      </thead>
      <tbody>{data.map((repo) => TableItem(repo))}</tbody>
    </Table>
  );
}
