import clientPromise from "../../../lib/mongodb/mongodb"

export default async function items(req, res) {


    if (req.method !== 'POST') return res.status(404).json({ error: '404' })

    const client = await clientPromise;
    const db = client.db('twitch-slots')

    const createId = await (db.collection('bonus-hunts').countDocuments()) + 1;
    const data = { id: createId, enable: true, bonus: 0, total: 0, avgX: 0, date: new Date(), bonus: [] }

    await db.collection('bonus-hunts').insertOne(data);

    res.send(JSON.stringify(data));


}