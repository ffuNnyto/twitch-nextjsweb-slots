import clientPromise from "../../../lib/mongodb/mongodb"
import { ObjectId } from "mongodb"

export default async function items(req, res) {


    const { data } = req.body;
    delete data._id;

    const client = await clientPromise;
    const db = client.db('twitch-slots')
    await db.collection('bonus-hunts').updateOne({ id: data.id }, { $set: data })

    res.send({ success: true });


}