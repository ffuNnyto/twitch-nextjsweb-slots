import TopBar from '../../components/topbar';
import { useSession, signIn, signOut } from "next-auth/react"
import { useState, useEffect } from 'react';
import axios from 'axios';
import BonusHuntCard from '../../components/stream/bonushunt.card';

export default function Streams() {

    const { data: session, status } = useSession();
    const [tab, setTab] = useState(0);
    const [lastBonusHunt, setLastBonusHunt] = useState(null);


    useEffect(() => {
        (async () => {
            axios.get('/api/bonushunt/get/?id=last').then((response) => {
                setLastBonusHunt(response.data);
            })
        })();

    }, [])

    return (

        <>
            <TopBar session={session} />
            <ul className="flex rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-dar ">
                <li className="w-full" onClick={() => { setTab(0); }}>
                    <div id='0' className="dark:text-white cursor-pointer inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700" aria-current="page">
                        <p>BONUS HUNTS</p>
                    </div>
                </li>
                <li className="w-full" onClick={() => { setTab(1); }}>
                    <div id='1' className="dark:text-white cursor-pointer inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50 ">
                        <p>TOP STREAMS</p>
                    </div>
                </li>
            </ul>

            <div className="text-center text-5xl rubik text-white mt-5 mb-5">LAST BONUS HUNTS</div>

            <BonusHuntCard lastBonusHunt={lastBonusHunt} />




            <div className="text-center text-5xl rubik text-white mt-5 mb-5">CURRENT BONUS HUNT</div>
            <h1 className="text-green-500 text-3xl text-center mt-8 mb-8">OPENING</h1>

            <div className="flex flex-wrap mx-auto" style={{ maxWidth: '81rem' }}>
                <div className="flex overflow-x-auto shadow-md sm:rounded-lg h-56 m-4 b">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs bg-darkpurple text-white uppercase ">
                            <tr>
                                <th scope="col" className="px-6 py-3">SLOT</th>
                                <th scope="col" className="px-6 py-3">BET</th>
                                <th scope="col" className="px-6 py-3">X</th>
                                <th scope="col" className="px-6 py-3">WIN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900whitespace-nowrap">WANTED DEAD OR ALIVE</th>
                                <td className="px-6 py-4">10</td>
                                <td className="px-6 py-4">24x</td>
                                <td className="px-6 py-4">$2999</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">GATES OF OLYMPUS</th>
                                <td className="px-6 py-4">121</td>
                                <td className="px-6 py-4">78x</td>
                                <td className="px-6 py-4">$1999</td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">STARLIGHT</th>
                                <td className="px-6 py-4">670</td>
                                <td className="px-6 py-4">67x</td>
                                <td className="px-6 py-4">$9229</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bg-darkpurple h-56 w-96 text-white rounded-xl m-4 media">
                    <h1 className="text-2xl text-center m-4 underline">STATS</h1>
                    <p className="ml-5 m-2">-DATE: <b>19/9/9999</b></p>
                    <p className="ml-5 m-2">-TOTAL BONUS: <b>56</b></p>
                    <p className="ml-5 m-2">-TOTAL X: <b>45</b></p>
                    <p className="ml-5 m-2">-TOTAL WIN:<b>19299</b></p>
                </div>
                <div className="bg-darkpurple text-white rounded-xl m-4 justify-center items-center media">

                    <iframe
                        className="w-full h-full rounded-xl"
                        src={'https://player.twitch.tv/?video=1&parent=localhost&autoplay=false'}
                        frameBorder="0"
                        scrolling="no"
                        allowFullScreen={true}

                    >
                    </iframe>
                </div>
            </div>












        </>
    );
}