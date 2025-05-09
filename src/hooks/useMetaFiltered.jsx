import { useEffect, useState } from "react"

const vite_metaurl = import.meta.env.VITE_METAURL

const useMetaFiltered = (country, type) => {
  const urlMeta = `${vite_metaurl}?by_country=${country}&by_type=${type}&sort=type,name:asc`
  const [data, setMeta] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(urlMeta)
      .then(response => response.json())
      .then(data => setMeta(data.total))
      .catch(error => console.error("Error fetching data:", error))
      .catch(error => setError(error))
  }, []);

  /* Calcula la cantidad de páginas a mostrar (50 resultados por página) */
  const rest = (data%50)
  const resp = parseInt(data/50)
  // console.log(resp)
  const cant_pages = rest === 0 ? resp : resp + 1
  // console.log(cant_pages)

  return { cant_pages, error }
}

export default useMetaFiltered
