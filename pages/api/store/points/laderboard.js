import clientPromise from "./../../../../lib/mongodb/mongodb"

export default async function items(req, res) {

    const client = await clientPromise;
    const db = client.db('twitch-slots')



    const allUsers = await db.collection('users').find({}).toArray();
    const rank = allUsers.indexOf(allUsers.filter((user) => user.name === req.query.name)[0]) + 1;




    const top = await db.collection('users').find({}).limit(5).sort({ points: -1 }).toArray();


    res.send({ rank: rank, top: top });


}