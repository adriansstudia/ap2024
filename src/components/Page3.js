// src/components/Page3.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Page3.css'; // Import custom CSS
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom


const rawHtml = require('.//htmlSites/output_with_toc.html').default; 
const TableOfContentsButton = ({ isOpen, onClick }) => (
    <button
      className={`btn btn-dark fixed-left-button ${isOpen ? 'hidden' : ''}`}
      type="button"
      onClick={onClick}
    >
      &#x2192; Table of Contents
    </button>
  );
  const TableOfContents = ({ isOpen }) => (
    <nav className={`bg-dark text-light p-3 fixed-left ${isOpen ? 'open' : ''}`}>
      <h4>Table</h4>
    <ul className="list-unstyled">
      <li>
        <a href="#section1" className="text-light">
          Section 1
        </a>
      </li>
      <li>
        <a href="#section2" className="text-light">
          Section 2
        </a>
      </li>
      {/* Add more sections as needed */}
    </ul>
  </nav>
);
const BottomBar = ({ isOpen, onClick }) => (
  <nav className={`bg- text-light p-3 fixed-bottom ${isOpen ? 'open' : ''}`} onClick={onClick}>
    {isOpen ? (
      <ul className="list-unstyled">
        <li>Point 1</li>
        <li>Point 2</li>
        {/* Add more points as needed */}
      </ul>
    ) : (
      <div>Click to reveal points</div>
    )}
  </nav>
);
const Page3 = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const history = useHistory(); // Initialize the useHistory hook

  const [isTableOfContentsOpen, setTableOfContentsOpen] = useState(false);
  const [isBottomBarOpen, setBottomBarOpen] = useState(false);

  const toggleTableOfContents = () => {
    setTableOfContentsOpen(!isTableOfContentsOpen);
  };

  const toggleBottomBar = () => {
    setBottomBarOpen(!isBottomBarOpen);
  };

  const navigateToPage4 = () => {
    // Update the URL to "/page4" without a full page reload
    history.push('/page4');
  };

  return (
    <div className="d-flex flex-column-reverse">
      <BottomBar isOpen={isBottomBarOpen} onClick={toggleBottomBar} />

      {/* Collapsible Table of Contents */}
      <TableOfContentsButton isOpen={isTableOfContentsOpen} onClick={toggleTableOfContents} />
      {isTableOfContentsOpen && <TableOfContents isOpen={isTableOfContentsOpen} />}

      {/* Main Content */}
      <div className="container-fluid mt-4">
        {/* Dark Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="#">
            Your Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#section1">
                  Section 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section2">
                  Section 2
                </a>
              </li>
              {/* Add more sections as needed */}
              <li className="nav-item">
              <span className="nav-link" onClick={navigateToPage4}>
                Page4
              </span>
                </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}

        <div className="col-md-3">
          <TableOfContents htmlContent={htmlContent} />
        </div>
        <div className="html-content-container">
          <h2>Page</h2>
          <p>This is text</p>
          <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
        </div>
      </div>
    </div>
  );
};

export default Page3;
