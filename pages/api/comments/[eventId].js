import {
  connectDataBase,
  insertDocuments,
  getDocuments,
} from "/helpers/db-util";

/**
 * It's a function that handles requests to the comments endpoint
 * @param req - The request object.
 * @param res - The response object.
 * @returns The comments are being returned.
 */
async function handler(req, res) {
  const eventId = await req.query.eventId;

  let client;

  /* Trying to connect to the database. If it fails, it will return a 500 status code and a message. */
  try {
    client = await connectDataBase();
  } catch (error) {
    res.status(500).json({ message: "Connection to the DB failed!" });
  }

  /* Checking if the request method is POST. If it is, it will check if the email, text, and name are
  valid. If they are, it will create a new comment object and insert it into the database. If it
  fails, it will return a 401 status code and a message. */
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

  /* Trying to get the comments from the database. */
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
