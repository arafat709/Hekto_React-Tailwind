import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context
const apiData = createContext();

const ContexAPI = ({ children }) => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <apiData.Provider value={data}>
      {children}
    </apiData.Provider>
  );
};

export { ContexAPI, apiData };
