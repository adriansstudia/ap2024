import React, { useState, useEffect } from 'react';

const HtmlPage = ({ filePath }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(filePath);

        if (!response.ok) {
          throw new Error(`Failed to fetch HTML content: ${response.status}`);
        }

        const content = await response.text();
        setHtmlContent(content);
      } catch (error) {
        console.error('Error fetching HTML content:', error);
      }
    };

    fetchHtmlContent();
  }, [filePath]);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default HtmlPage;
