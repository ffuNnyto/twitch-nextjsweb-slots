import clientPromise from "../../../lib/mongodb/mongodb"

export default async function items(req, res) {

    const client = await clientPromise;
    const db = client.db('twitch-slots')



    if (req.query.id) {

        const { id } = req.query;
        if (id !== 'last') return res.send({ error: 'error' });
        const items = await db.collection('bonus-hunts').find({}).sort({ _id: -1 }).limit(4).toArray();
        return res.send(items);
    }

    const items = await db.collection('bonus-hunts').find({ enable: true }).limit(1).toArray();
    res.send(items[0]);


}