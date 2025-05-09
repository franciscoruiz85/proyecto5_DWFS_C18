import { useState, useEffect } from "react"

const useChartTypes = () => {
  const [chartTypes, setChartTypes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const typesData = await import("../chartTypes.json").then(
          (module) => module.default
        )

        setChartTypes(typesData)
        setLoading(false)
      } catch (error) {
        console.error("Error loading data:", error)
        setLoading(false)
      }
    };

    loadData()
  }, []);

  return { chartTypes, loading };
};

export default useChartTypes
