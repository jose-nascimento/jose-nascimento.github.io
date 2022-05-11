import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { format } from 'date-fns';
import { Octokit } from '@octokit/rest';
import './App.css';

const octokit = new Octokit({
  userAgent: 'github/jose-nascimento',
});

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

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    octokit.rest.repos
      .listForUser({ username: 'jose-nascimento' })
      .then(({ data }) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Github de José Nascimento</h1>
      </header>
      <main>
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
      </main>
    </div>
  );
}

export default App;
