export default function LaderBoard(props) {
    return (
        <>
            <div className='text-white'>
                <ol>
                    {
                        props.list.map((user, idx) => {
                            return <li key={idx}>
                                <mark>{user.name}</mark>
                                <small>{user.points}</small>
                            </li>
                        })
                    }
                </ol>
            </div>
        </>
    );
}