import User from "@/models/User";
import dbConnect from "@/util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();

  const { method } = req;

  if (method === "GET") {
    res.status(200).json({ message: "Hello World" });
  }

  if (method === "POST") {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
