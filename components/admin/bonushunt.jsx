import { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router'

export default function BonusHunt(props) {

    const [currentBonusHunt, setCurrentBonusHunt] = useState(null);
    const [textAreaValue, setTextAreaValue] = useState('');
    const [slotName, setSlotName] = useState('');
    const [slotBet, setSlotBet] = useState(0);

    var loaded = false;

    useEffect(() => {

        axios.get('/api/bonushunt/get').then((response) => {
            if (!loaded) {
                setCurrentBonusHunt(response.data)
                setTextAreaValue(JSON.stringify(response.data?.bonus, undefined, 4));
                loaded = true;
            }
        })
    }, [])

    const createBonusHunt = () => {
        axios.post('/api/bonushunt/create').then((response) => {
            setCurrentBonusHunt(response.data);
        })
    }

    const addBonus = () => {

        const newBonus = { name: slotName, bet: slotBet, result: 0, x: 0 };
        currentBonusHunt.bonus.push(newBonus)
        setTextAreaValue(JSON.stringify(currentBonusHunt.bonus, undefined, 4));
        axios.post('/api/bonushunt/update', { data: currentBonusHunt });

    }

    const updateAll = () => {
        currentBonusHunt.bonus = [];
        try {

            if (textAreaValue.length > 0) {
                textAreaValue.split('\r\n').map((bono) => {
                    currentBonusHunt.bonus = JSON.parse(bono);
                })
            }
            axios.post('/api/bonushunt/update', { data: currentBonusHunt });
        }
        catch (err) {

        }
    }

    const changeTextArea = (event) => {
        setTextAreaValue(event.target.value);
    }

    const closeBonusHunt = () => {
        axios.post('/api/bonushunt/close', { data: currentBonusHunt }).then(Router.reload());
    }





    return (
        <>
            {
                (currentBonusHunt) ?
                    <>
                        <div className="container flex max-w-screen-lg mx-auto mt-5 justify-center h-auto">
                            <div className="bonus hunt stats text-white text-left p-2 ">
                                <h1 className='rubik text-3xl'>CURRENT BONUS HUNT: #{currentBonusHunt.id}</h1>
                                <p className='underline m-2'>BONUS: <b>{currentBonusHunt?.bonus?.length}</b></p>
                                <p className='underline m-2'>DATE: <b>{currentBonusHunt?.date}</b></p>
                            </div>
                        </div>
                        <div className="container flex flex-wrap max-w-screen-lg mx-auto mt-5 justify-center h-auto border-4 border-dotted py-6 p-6">
                            <h1 className='rubik text-3xl text-white p-3'>ADD BONUS</h1>
                            <input onChange={(event) => { setSlotName(event.target.value) }} type="text" id="slotname" className="bg-white border text-sm rounded-lg focus block w-full p-2.5 m-2" placeholder="SLOT NAME" required />
                            <input onChange={(event) => { setSlotBet(parseInt(event.target.value)) }} type="text" id="slotbet" className="bg-white border text-sm rounded-lg focus block w-full p-2.5 m-2" placeholder="BET" required />
                            <button onClick={addBonus} className="bg-white border-rose-400 border-2 mt-4 text-rose-400 font-bold py-2 px-4 rounded">
                                ADD
                            </button>

                        </div>
                        <div className="container flex flex-wrap max-w-screen-lg mx-auto mt-5 justify-center h-auto border-4 border-dotted py-6 p-6">
                            <textarea onChange={changeTextArea} value={textAreaValue} className="w-full" id="" cols="30" rows="10"></textarea>
                            <button onClick={updateAll} className="bg-white border-rose-400 border-2 mt-4 text-rose-400 font-bold py-2 px-4 rounded">
                                UPDATE
                            </button>
                        </div>
                        <div className="container flex flex-wrap max-w-screen-lg mx-auto mt-5 justify-center h-auto py-6 p-6 ">
                            <button onClick={closeBonusHunt} className="bg-rose-400 border-2 mt-4 text-white hover:scale-125 font-bold py-2 px-4 rounded">
                                CLOSE BONUS HUNT #{currentBonusHunt.id}
                            </button>
                        </div>
                    </>
                    :
                    <>
                        <div className="container flex flex-wrap max-w-screen-lg mx-auto mt-5 justify-center h-auto border-4 border-dotted py-6 p-6">
                            <button onClick={() => { createBonusHunt(); }} className="bg-darkpurple text-white p-6 hover:bg-white hover:text-darkpurple">CREATE NEW BONUS HUNT</button>
                        </div>
                    </>
            }
        </>
    );
}