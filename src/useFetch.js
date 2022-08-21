import { useState, useEffect } from 'react'
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    // console.log("mama");
    // console.log("baba");
    useEffect(() => {
        setTimeout(() => fetch(url).then(response => response.json()).then(data => setData(data)).catch((e) => setErrorMessage("Fail to load data!")), 1000);
    }, [])
    //console.log(3);
    return [data, errorMessage];
}
export default useFetch;