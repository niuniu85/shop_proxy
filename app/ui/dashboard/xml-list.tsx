"use client"

import React, { useState, useEffect } from 'react';

const IndexPage = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getData');
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {apiData && (
        <div>
          <h2>Data from API:</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
