import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';
import RepoTable from './table';

const octokit = new Octokit({
  userAgent: 'github/jose-nascimento',
});

export default function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    octokit.rest.repos
      .listForUser({ username: 'jose-nascimento' })
      .then(({ data }) => setData(data));
  }, []);

  return (
    <main>
      <RepoTable data={data} />
    </main>
  );
}
