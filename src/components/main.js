import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';
import RepoTable from './table';
import Toolbar from './toolbar';
import Pagination from './pagination';

const octokit = new Octokit({
  userAgent: 'github/jose-nascimento',
});

export default function Main() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState({});
  const [filter, setFilter] = useState();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState();

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

  const goBack = () => {
    setPage(page - 1);
  };

  const goForward = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    octokit.rest.repos
      .listForUser({
        username: 'jose-nascimento',
        sort: param,
        direction,
        type: filter,
        page,
      })
      .then(({ data }) => setData(data));
  }, [param, direction, filter]);

  const hasNext = data.length === 30;
  const hasBack = page && page > 1;

  const searchTerm = search.toLowerCase();
  const filteredData = search
    ? data.filter((repo) => repo.name.toLowerCase().includes(searchTerm))
    : data;

  return (
    <main>
      <Toolbar
        filter={filter}
        search={search}
        setFilter={setFilter}
        setSearch={setSearch}
      />
      <RepoTable data={filteredData} sort={sort} changeSort={changeSort} />
      {(hasNext || hasBack) && (
        <Pagination
          hasBack={hasBack}
          hasNext={hasNext}
          goBack={goBack}
          goForward={goForward}
        />
      )}
    </main>
  );
}
