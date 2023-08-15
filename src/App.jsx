import React, { useState, useEffect } from "react";

const fetchData = async () => {
  const nigga = await fetch(
    "https://randomuser.me/api?results=10&seed=charles"
  );
  return await nigga.json();
};

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(false);
    (async () => {
      try {
        const data = await fetchData();
        setData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <h1>Nigga React! </h1>
      {loading && <p>Loading your data...</p>}
      {!error && !loading && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && !loading && <p>{error}</p>}
    </>
  );
}

// Caso en el que ESTA cargando (y no sabemos si hay data o no)

// Caso en el que YA hay data

// Caso en el que hay error
