import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        
        async function getData(){
            try{
                setLoading(true);
                setError(null);

                const response = await fetch(
                    url,
                    { signal: controller.signal }
                );

                if (!response.ok){
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result);
                
            }catch(Error){
                if(Error.name !== "AbortError"){
                    setError(Error.message);
                }
            }finally{
                setLoading(false);
            }
        }
        getData();
        return() =>{
            controller.abort();
        }
    }, [url])
  return ({data, loading, error});
  
}

export default useFetch
