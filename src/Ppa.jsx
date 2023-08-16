import { useEffect, useState } from "react";

const fetchData = async () => {
  const fetching = await fetch(
    "https://randomuser.me/api?results=10&seed=charles"
  );
  return await fetching.json();
};

export default function Ppa() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //   const dataSetter = (data) => setData(data);
  const cakch = (message) => setError(message);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const func = async () => {
      try {
        const jsonPromise = await fetchData();
        setData(jsonPromise);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    func();
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Fetch Practice</h1>

      {!loading && !error && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {loading && <h3>Loading your data...</h3>}
      {!loading && error && <h3>{error}</h3>}
    </div>
  );
}
