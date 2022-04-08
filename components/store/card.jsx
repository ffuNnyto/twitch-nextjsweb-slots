export default function StoreCard(props) {
    return (
        <>

            <div className='flex flex-wrap'>

                {
                    props.listItems.map((item, idx) => {
                        return (


                            <div key={idx} className='bg-rose-400 rounded-xl m-6 justify-center items-center text-center flex-col flex shadow-white shadow-xl mx-auto'>
                                <p className='text-center text-xl text-gray-50 pt-5 pl-3 rubik'>{item.name}</p>
                                <img src={item.image} className='object-cover w-60 h-48 m-3' />
                                <p className='text-xs md:text-lg font-light text-gray-50'>{item.price} POINTS</p>
                                <p className='font-light text-gray-50'>{item.left} LEFT</p>
                                <button className=' text-white bg-rose-300 hover:bg-white hover:text-rose-400 font-bold py-2 px-4 rounded items-center m-2'>
                                    PURCHASE
                                </button>
                            </div>


                        );
                    })
                }



            </div>
        </>
    );
}