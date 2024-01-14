// src/components/LegalPage.js

import React, { useEffect, useState } from 'react';

const LegalPage = ({ lawRegulation }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(lawRegulation.filePath);
        const htmlContent = await response.text();
        setContent(htmlContent);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, [lawRegulation.filePath]);

  return (
    <div>
      <h2>{lawRegulation.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default LegalPage;
