import React, { useState, useEffect } from 'react';
import Home from './pages/home/home.js'; // Ensure you have the correct path to the Home component
import Filter from './componets/Filter.js';
import Header from './componets/Header.js';
import Navbar from './componets/Navbar.js';
import Result from './componets/Country.js';

const App = () => {
  const [trademarks, setTrademarks] = useState([]);
  const [owners, setOwners] = useState([]);
  const [lawFirms, setLawFirms] = useState([]);
  const [attorneys, setAttorneys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9600/body');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Extract hits array from the nested structure
        const extractedTrademarks = data.hits.hits.map(hit => hit._source);
        setTrademarks(extractedTrademarks);

        // Dummy data for owners, law firms, and attorneys
        const dummyOwners = data.aggregations.current_owners.buckets;
        const dummyLawFirms = data.aggregations.class_codes.buckets;
        console.log(dummyLawFirms)
        const dummyAttorneys = data.aggregations.attorneys.buckets;

        setOwners(dummyOwners);
        setLawFirms(dummyLawFirms);
        setAttorneys(dummyAttorneys);
      } catch (error) {
        console.error('There was a problem with fetching trademark data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex w-full">
        <div className="w-3/4 p-4">
          <Home trademarks={trademarks} />
        </div>
        <div className="w-1/4 p-4">
          <Filter owners={owners} lawFirms={lawFirms} attorneys={attorneys} />
        </div>

      </div>
    </div>
  );
};

export default App;
