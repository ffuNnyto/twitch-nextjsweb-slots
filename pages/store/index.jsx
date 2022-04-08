import TopBar from '../../components/topbar';
import { useSession, signIn, signOut } from 'next-auth/react'
import StoreCard from '../../components/store/card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LaderBoard from '../../components/store/laderboard';
import UserStats from '../../components/store/stats';

export default function Store() {

    const { data: session, status } = useSession();
    const [storeItems, setStoreItems] = useState([]);
    const [pointsLaderBoard, setPointsLaderBoard] = useState([]);
    const [rank, setRank] = useState(0);
    const [tab, setTab] = useState(0);
    
    useEffect(() => {
        (async () => {
            await axios.get('/api/store/items').then((response) => {
                setStoreItems(response.data);
            })
            await axios.get('/api/store/points/laderboard?name=ffuNny_').then((response) => {
                setPointsLaderBoard(response.data.top);
                setRank(response.data.rank);
              
            })
        })();
    }, [])


    const RenderTab = () => {
        switch (tab) {
            case 0: return <></>
            case 1: return (
                <div className='board'>
                    <div className='text-white '>
                        <LaderBoard list={pointsLaderBoard} />
                    </div>
                </div>
            );
            case 2: return (
                <UserStats />
            );
        }
    }
    const changeTab = (value)=> {
        if(tab === value) return setTab(0);
        return setTab(value);
    }



    return (
        <>
            <TopBar session={session} />



            <div className='w-full max-w-screen-xl mx-auto'>

                <button onClick={() => { changeTab(2); }} className="bg-darkpurple border-r-2 hover:bg-white hover:text-darkpurple border-b-2 border-white h-22 text-center text-white rubik text-xl cursor-pointer p-2  mt-10" style={{ width: '50%' }}>SHOW YOUR STATS</button>
                <button  onClick={() => { changeTab(1); }} className="bg-darkpurple h-22  border-b-2 hover:bg-white hover:text-darkpurple text-center text-white rubik text-xl cursor-pointer p-2 mt-2" style={{ width: '50%' }}>SHOW LADERBOARD</button>

                <div className="flex">
                    <div className='w-full flex-col'>
                        <RenderTab />
                    </div>
                </div>




                <StoreCard listItems={storeItems} />



            </div>




        </>
    );
}


/*
 <div className='w-full max-w-screen-xl flex justify-center mx-auto'>
                <div className='container max-w-sm flex-col'>
                    <div className='board m-3'>
                        <div className='head'>
                            <i className='fas fa-crown'></i>
                            <h1>Most active Players</h1>
                        </div>
                        <div className='text-white'>
                            <ol>
                                <li>
                                    <mark>Jerry Wood</mark>
                                    <small>948</small>
                                </li>
                                <li>
                                    <mark>Brandon Barnes</mark>
                                    <small>750</small>
                                </li>
                                <li>
                                    <mark>Raymond Knight</mark>
                                    <small>684</small>
                                </li>
                                <li>
                                    <mark>Trevor McCormick</mark>
                                    <small>335</small>
                                </li>
                                <li>
                                    <mark>Andrew Fox</mark>
                                    <small>296</small>
                                </li>
                            </ol>
                        </div>



                    </div>

                    <div className='bg-darkpurple m-5 h-auto flex-col'>
                        <div className='title text-white text-center m-3 text-xl rubik'>STATS</div>
                    </div>

                </div>

                <StoreCard listItems={storeItems} />



            </div>



*/