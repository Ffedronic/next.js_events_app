function comments(req, res) {
  const eventId = req.query.eventId;
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
      id: new Date().toISOString(),
      name: name,
      email: email,
      text: text,
    };
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
export default comments;
