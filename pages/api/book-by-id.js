export default function handler(req, res) {
  const { id } = req.query;
  const books = [
    {
      id: "1",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
    },
    {
      id: "2",
      title: "The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
    },
    {
      id: "3",
      title: "Born a Crime",
      author: "Trevor Noah",
    },
  ];

  const foundBook = books.find((book) => {
    if (book.id === id) {
      return true;
    } else {
      return false;
    }
  });

  res.json({books: foundBook});
}
