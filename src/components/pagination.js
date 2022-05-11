import React from 'react';

export default function Pagination({ hasBack, hasNext, goBack, goForward }) {
  return (
    <div className="pagination">
      <button
        className={hasBack ? 'pag-btn active' : 'pag-btn'}
        disabled={!hasBack}
        onClick={goBack}
      >
        {'<'} Anterior
      </button>
      <button
        className={hasNext ? 'pag-btn active' : 'pag-btn'}
        disabled={!hasNext}
        onClick={goForward}
      >
        Próximo {'>'}
      </button>
    </div>
  );
}
