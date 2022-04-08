import clientPromise from "./../../../lib/mongodb/mongodb"

export default async function items(req, res) {

    const client = await clientPromise;
    const db = client.db('twitch-slots')
    const items = await db.collection('store').find({}).toArray();

    res.send(items);


}