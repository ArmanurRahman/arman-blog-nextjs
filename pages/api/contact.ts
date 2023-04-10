import { connectToDatabase, insetData } from "@/lib/db-util";
import { NextApiRequest, NextApiResponse } from "next";

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        let client;
        try {
            client = await connectToDatabase();
        } catch (error) {
            res.status(500).json({ message: "cannot connect to database" });
            client?.close();
            return;
        }

        try {
            await insetData(client, "post", JSON.parse(req.body));
        } catch (err) {
            res.status(500).json({ message: "can not insert post" });
            return;
        }
        res.status(201).json({ message: "successfully posted" });
        client.close();
        return;
    }
};

export default contactHandler;
