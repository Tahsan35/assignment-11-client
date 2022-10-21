import { useEffect, useState } from 'react';

const usePerfume = () => {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server.vercel.app/perfume')
            .then(res => res.json())
            .then(data => {
                setPerfumes(data);
            })
    }, [])
    return [perfumes, setPerfumes];
};
export default usePerfume;
