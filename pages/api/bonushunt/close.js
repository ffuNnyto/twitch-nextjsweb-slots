import clientPromise from "../../../lib/mongodb/mongodb"

export default async function items(req, res) {


    if (req.method !== 'POST') return res.status(404).json({ error: '404' })

    const { data } = req.body;


    delete data._id;

    var total = 0;
    var totalBets = 0;

    const client = await clientPromise;
    const db = client.db('twitch-slots')


    data.bonus.map((bonus) => {
        total += bonus.result;
        totalBets += bonus.bet;
        bonus.x = bonus.result / bonus.bet;
    })

    const avgX = (total / totalBets);

    data.avgX = avgX;
    data.enable = false;
    data.total = total;

    await db.collection('bonus-hunts').updateOne({ id: data.id }, { $set: data });

    res.send({ success: true });


}