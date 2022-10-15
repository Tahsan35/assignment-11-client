import { useEffect, useState } from 'react';

const usePerfume = () => {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        fetch('https://ancient-bayou-60727.herokuapp.com/perfume')
            .then(res => res.json())
            .then(data => {
                setPerfumes(data);
            })
    }, [])
    return [perfumes, setPerfumes];
};
export default usePerfume;
