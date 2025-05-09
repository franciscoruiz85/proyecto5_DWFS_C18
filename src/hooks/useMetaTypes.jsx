import { useEffect, useState } from "react"

const vite_metaurl = import.meta.env.VITE_METAURL

const useMetaTypes = (country) => {
  const [bTypes, setBTypes] = useState(null)
  const [loading, setLoading] = useState(true)
  const url = `${vite_metaurl}?by_country=${country}`

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const types = Object.keys(data.by_type || {})
        setBTypes(types)
      })
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => setLoading(false))
  }, []);

  return { bTypes, loading }
}

export default useMetaTypes
