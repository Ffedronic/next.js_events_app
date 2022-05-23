import {
  connectDataBase,
  insertDocuments,
  getDocuments,
} from "/helpers/db-util";

async function handler(req, res) {
  const eventId = await req.query.eventId;

  let client;

  try {
    client = await connectDataBase();
  } catch (error) {
    res.status(500).json({ message: "Connection to the DB failed!" });
  }

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

    try {
      const results = await insertDocuments(client, "comments", {
        ...newComment,
      });

      newComment.id = await results.insertedId;

      res.status(201).json({ message: "Added comment", comment: newComment });
    } catch (error) {
      res.status(401).json({ message: "insert comments failed" });
    }
  }

  if (req.method === "GET") {
    
    try {
      client = await connectDataBase();
    } catch (error) {
      res.status(500).json({ message: "Connection to the DB failed!" });
    }

    try {
      const results = await getDocuments(client, "comments");
      res.status(200).json({ comments: results });
    } catch (error) {
      res.status(401).json({ message: "load comments failed" });
    }
  }
}
export default handler;
