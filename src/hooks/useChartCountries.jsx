import { useState, useEffect } from 'react'

const useChartCountries = () => {
  const [chartCountries, setChartCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const countriesData = await import("../chartCountries.json").then(
          (module) => module.default
        );

        setChartCountries(countriesData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setLoading(false);
      }
    };

    loadData()
  }, [])

  return { chartCountries, loading }
};

export default useChartCountries;
