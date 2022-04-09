import { useEffect, useState } from "react"
import { api } from "../services/api"

const useFetchData = (endpoint, defaultData) => {
    const [data, setData] = useState(defaultData)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await api("GET", endpoint)
                setData(response)
            } catch (error) {
                
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return {loading, data}
}

export default useFetchData