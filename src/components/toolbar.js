import React from 'react';
import { Form } from 'react-bootstrap';

export default function Toolbar({ filter, search, setFilter, setSearch }) {
  return (
    <menu>
      <div className="filters">
        <label htmlFor="filters">Filtros: </label>
        <Form.Select
          id="filters"
          name="filters"
          aria-label="selecionar filtro"
          value={filter}
          defaultValue="owner"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="owner">Dono</option>
          <option value="all">Todos</option>
          <option value="member">Membro</option>
        </Form.Select>
      </div>
      <div className="search">
        <label htmlFor="search">Busca: </label>
        <Form.Control
          type="text"
          id="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </menu>
  );
}
