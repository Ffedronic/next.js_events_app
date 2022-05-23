import {connectDataBase, insertDocuments } from '/helpers/db-util'

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = await req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid email address" });
      return;
    }

    let client;

    try {
      client = await connectDataBase();
    } catch (error) {
      res.status(500).json({ message: "Connection to the DB failed!" });
    }

    try {
      await insertDocuments(client, "emails", {
        email: userEmail,
      });

      res.status(201).json({ message: "signed up!" });
    } catch (error) {
      res.status(500).json({message: "sign un failed!"})
    }
  }
}

export default handler;
