import { useEffect, useState } from "react";
import BookItem from "./books-item";

export default function BookGrid() {

    const [books, setBooks] = useState([]);

    useEffect (() => {
        getBooks()
    }, []);

    const getBooks = async () => {
        const response = await fetch('/api/books');
        const data = await response.json();
        setBooks(data);
    }

    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {books.map((book) => (
                <BookItem book={book} />
            ))}

        </div>
    )
}