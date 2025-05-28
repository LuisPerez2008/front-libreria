import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/baseURL";

export function useFetchData(url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;
       let mounted = true;
       setLoading(true);

       axios.get(API_BASE_URL + url).then(response => {
            if (mounted) {
                setData(response.data);
                setLoading(false);
            }
       }).catch(err => {
            if (mounted) {
                setError(err);
               
            }
       }).finally(() => {
            if (mounted) {
                setLoading(false);
            }
       });

       return () => {mounted = false};
    }, [url]);

    return { data, loading, error };
} 