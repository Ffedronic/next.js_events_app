import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;
  const client = MongoClient.connect(
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
    const db = client.db()
    const results = await db.collection("comments").insertOne({...newComment});
    console.log(results)
    newComment.id = results.insertedId;
    res.status(201).json({ message: "Added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "a1", name: "felix", text: "i have sended you some text" },
      { id: "a2", name: "ines", text: "i have sended you some text" },
      { id: "a3", name: "papa", text: "i have sended you some text" },
    ];
    res.status(200).json({ comments: dummyList });
  }
  
}
export default handler;
