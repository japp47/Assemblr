import { useState } from "react";
const useFetch = (cb) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fn = async(...args) => {
        setLoading(true);
        setError(null);

        try {
            const message = await cb(...args);
            setData(message);
            setError(null);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fn};
}

export default useFetch;