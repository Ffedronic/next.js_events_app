import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = await req.query.eventId;
  const client = await MongoClient.connect(
    "mongodb+srv://felix:felixfedronic@cluster0.ygtml.mongodb.net/?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    const { email, text, name } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !text ||
      !name ||
      name.trim() === "" ||
      text.trim() === ""
    ) {
      res.status(403).json({ message: "invalid input!" });
      return;
    }
    const newComment = {
      id: eventId,
      name: name,
      email: email,
      text: text,
    };
    const db = await client.db();
    const results = await db
      .collection("comments")
      .insertOne({ ...newComment });
    console.log(results);
    newComment.id = results.insertedId;
    res.status(201).json({ message: "Added comment", comment: newComment });
    client.close();
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "a1", name: "felix", text: "i have sended you some text" },
      { id: "a2", name: "ines", text: "i have sended you some text" },
      { id: "a3", name: "papa", text: "i have sended you some text" },
    ];
    const db = await client.db();
    const results = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();
    res.status(200).json({ comments: results });
  }
}
export default handler;
