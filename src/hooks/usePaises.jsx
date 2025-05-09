import { useState, useEffect } from "react"

const usePaises = () => {
  const [paises, setPaises] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const countriesData = await import('../paises.json').then(module => module.default)
        
        setPaises(countriesData)
        setLoading(false)
      } catch (error) {
        console.error('Error loading data:', error)
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return { paises, loading }
};

export default usePaises
