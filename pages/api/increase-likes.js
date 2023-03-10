
import sql from "@/utils/postgres";

export default async function handler(req, res) {
  // const { id, likes } = +req.query.likes;
  const id = +req.query.id;
  const likes = +req.query.likes;


    if (id === null || id === undefined) {
        res.status(400).json({message: "A book id is required"})
        return;
    }

    if (likes === null || likes === undefined) {
        res.status(400).json({message: "Likes is required"})
        return;
    }

  const books = await sql`
    UPDATE books
    SET likes = ${likes}
    WHERE id = ${id}
    `;

  res.json({ message: "Number of likes updated" });
}
