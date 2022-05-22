import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = await req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid email address" });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://felix:felixfedronic@cluster0.ygtml.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = await client.db();
    db.collection("emails").insertOne({ email: userEmail });
    res.status(201).json({ message: "signed up!" });
  }
}

export default handler;
