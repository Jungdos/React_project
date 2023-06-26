import React, { useState, useEffect } from 'react';
import LoadingScreen from './LodingScreen';

const PageLoad = ({ url, children }) => {
  const [loading, setLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error', error);
      }
      setTimeout(() => setIsFadingOut(true), 3000);
    };
    fetchData();
  }, [url]);

  useEffect(() => {
    if (isFadingOut) {
      setTimeout(() => setLoading(false), 1000);
    }
  }, [isFadingOut]); 

  if (loading) {
    return <LoadingScreen isFadingOut={isFadingOut} />
  }

  return children;
};

export default PageLoad;