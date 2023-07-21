import { useState, useEffect } from "react";
export default function useFetch(type, id) {
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            let response, url, parameter;
            if (type) { 
                url = "https://node-hnapi.herokuapp.com/"; 
                parameter = type.toLowerCase(); 
            }
            else if (id) { 
                url = "https://hn.algolia.com/api/v1/items/"; 
                parameter = id.toLowerCase(); 
            }
            try {
                response = await fetch(`${url}${parameter}`);
            } catch (error) {
                setError(true);
            }
        
            if (response) if (response.status !== 200) {
                setError(true);
            } else {
                let data = await response.json();
                setLoading(false);
                setData(data);
            }
        }
        fetchData();
    }, [id, type])

    return { loading, error, data };
}
