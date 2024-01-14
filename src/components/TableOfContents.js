// src/components/TableOfContents.js

import React from 'react';
import { Link } from 'react-router-dom';

const TableOfContents = ({ regulations }) => {
  return (
    <div>
      <h2>Table of Contents</h2>
      <ul>
        {regulations.map((regulation, index) => (
          <li key={index}>
            <Link to={`/law/${index + 1}`}>{`${index + 1}. ${regulation.title}`}</Link>
          </li>
        ))}
        <li>
          <Link to="/page3">3. Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default TableOfContents;
