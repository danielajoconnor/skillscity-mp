import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

export default function SingleBook() {
  const router = useRouter();
  const { bookId } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (!bookId) return;

    getBook(bookId);
  }, [bookId]);

  const getBook = async (id) => {
    const response = await fetch(`/api/book-by-id?id=${id}`);
    const data = await response.json();
    const { book } = data;
    setBook(data);
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return <div>{book.title}</div>;
}
