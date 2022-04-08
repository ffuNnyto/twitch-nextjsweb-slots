export default function BonusHuntCard(props) {



    if (props.lastBonusHunt === null) return <></>


    return (
        <>


            <div className="container flex flex-wrap mx-auto w-full m-2 justify-center">
                {
                    props.lastBonusHunt.map((bonushunt, idx) => {
                        return (
                            <div key={idx} className="bg-rose-400 w-64 text-white p-3 m-3 rounded-xl shadow-2xl">
                                <h1 className="text-center text-xl rubik"> - BONUS HUNT #{bonushunt.id} - </h1>
                                <div className="m-2 p-2">
                                    <p>- BONUS: {bonushunt.bonus.length}</p>
                                    <p>- TOTAL: {bonushunt.total}$</p>
                                    <p>- X: {bonushunt.avgX}</p>
                                </div>

                            </div>
                        );
                    })
                }

            </div>
        </>
    );
}


/*





<div className="container flex flex-wrap mx-auto w-full m-2 justify-center">

                <div className="bg-rose-400 w-64 text-white p-3 m-3 rounded-xl shadow-2xl">
                    <h1 className="text-center text-xl rubik"> - BONUS HUNT #1 - </h1>
                    <div className="m-2 p-2">
                        <p>- BONUS: 999</p>
                        <p>- TOTAL: 457$</p>
                        <p>- CASHOUT: 0$</p>
                    </div>

                </div>
                <div className="bg-rose-400 w-64 text-white p-3 m-3 rounded-xl">
                    <h1 className="text-center text-xl rubik"> - BONUS HUNT #1 - </h1>
                    <div className="m-2 p-2">
                        <p>- BONUS: 999</p>
                        <p>- TOTAL: 457$</p>
                        <p>- CASHOUT: 0$</p>
                    </div>

                </div>
                <div className="bg-rose-400 w-64 text-white p-3 m-3 rounded-xl">
                    <h1 className="text-center text-xl rubik"> - BONUS HUNT #1 - </h1>
                    <div className="m-2 p-2">
                        <p>- BONUS: 999</p>
                        <p>- TOTAL: 457$</p>
                        <p>- CASHOUT: 0$</p>
                    </div>

                </div>
                <div className="bg-rose-400 w-64 text-white p-3 m-3 rounded-xl">
                    <h1 className="text-center text-xl rubik"> - BONUS HUNT #1 - </h1>
                    <div className="m-2 p-2">
                        <p>- BONUS: 999</p>
                        <p>- TOTAL: 457$</p>
                        <p>- CASHOUT: 0$</p>
                    </div>

                </div>
            </div>
*/