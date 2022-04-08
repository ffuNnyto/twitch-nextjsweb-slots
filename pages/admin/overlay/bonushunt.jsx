import { useEffect, useState } from "react";
import axios from 'axios';

export default function OVERLAY_BonusHunt() {

    const [currentBonusHunt, setCurrentBonusHunt] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('/api/bonushunt/get').then((response) => {
                setCurrentBonusHunt(response.data)
            })
        }, 10000);

    }, [])

    return (
        <>
            <div className="bg-transparent text-white text-3xl">
                {
                    (currentBonusHunt) ?
                        <>
                            {
                                currentBonusHunt.bonus.map((bonus, idx) => {
                                    return (
                                        <h1 key={idx}>{bonus.name}</h1>
                                    );
                                })
                            }
                        </>
                        :
                        <>
                        </>
                }
            </div>
        </>
    );
}