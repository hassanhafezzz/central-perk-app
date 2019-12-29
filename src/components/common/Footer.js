import React from 'react';
import moment from 'moment';

export default function Footer() {
  return (
    <footer className="credits">
      built with{' '}
      <span role="img" aria-labelledby="coffee">
        ☕️
      </span>
      by{' '}
      <a href="https://twitter.com/HassanHafezz" rel="noopener noreferrer" target="_blank">
        @hassanhafezz
      </a>{' '}
      <span className="now">{moment().format('YYYY')}</span>
      {/* <span className="now">{new Date().getFullYear()}</span> */}
    </footer>
  );
}
