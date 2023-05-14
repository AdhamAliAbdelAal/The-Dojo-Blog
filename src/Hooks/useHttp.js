import {useState,useCallback} from 'react';

const useHttp = () => {
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(false);

    const makeRequest=useCallback(async(axiosInstance,requestConfig,applyData)=>{
        setIsLoading(true);
        setError(null);
        try{
            const response=await axiosInstance({
                ...requestConfig,
            });
            applyData(response.data);
        }
        catch(error)
        {
            setError(error.message);
        }
        setIsLoading(false);
    }
    ,[]);
    return [error,isLoading,makeRequest];
}

export default useHttp;
