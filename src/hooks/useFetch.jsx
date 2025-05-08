import { useEffect, useState } from "react";

const useFetch = (url, update) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.arrayBuffer())
      .then(buffer => {
        const encodings = ['windows-1252', 'iso-8859-1', 'latin1'];
        let decodedText = '';
        
        for (const encoding of encodings) {
          try {
            const decoder = new TextDecoder(encoding);
            decodedText = decoder.decode(buffer);
            break;
          } catch (e) {
            console.warn(`Error con ${encoding}:`, e);
          }
        }
        
        return JSON.parse(decodedText);
      })
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [update]);

  return { data, loading, error };
};

export default useFetch;
