import sql from "@/utils/postgres";

export default async function handler(req, res) {
  const { name, email, message } = req.query;

  const response = await sql`
    INSERT INTO contact_messages
        (name, message, email)
    values
        (${name}, ${message}, ${email})
  `;

  res.json({ message: "Success" });
}
