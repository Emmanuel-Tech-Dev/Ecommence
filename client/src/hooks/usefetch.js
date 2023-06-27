import  {useState , useEffect } from "react";
import { makeRequest } from "../../makeRequest";

const useFetch = (url) => {
    const [data , setData] = useState([])
    const [newData , setNewData] = useState([])
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            try{
             setLoading(true)
             const res = await makeRequest.get(url)
             setData(res.data.data)
             setNewData(res.data.data)

            }
            catch(err){
                setError(true)
                console.error(err.messsage)
                console.error(err.stack)
            }

            setLoading(false)
        }

    fetchData()
    } , [url])

    return {data , loading , error , newData}

}

export default useFetch