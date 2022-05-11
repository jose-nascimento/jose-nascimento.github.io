import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';
import RepoTable from './table';

const octokit = new Octokit({
  userAgent: 'github/jose-nascimento',
});

export default function Main() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState({});
  const { sort: param, direction } = sort;
  const changeSort = (sort, param) => {
    if (sort.sort !== param) {
      return param === 'full_name'
        ? setSort({ sort: param, direction: 'asc' })
        : setSort({ sort: param, direction: 'desc' });
    }
    const newDirection = sort.direction === 'asc' ? 'desc' : 'asc';
    return setSort({ sort: param, direction: newDirection });
  };

  useEffect(() => {
    octokit.rest.repos
      .listForUser({ username: 'jose-nascimento', sort: param, direction })
      .then(({ data }) => setData(data));
  }, [param, direction]);

  return (
    <main>
      <RepoTable data={data} sort={sort} changeSort={changeSort} />
    </main>
  );
}
