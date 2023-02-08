export default function handler(req, res) {
    const books = [
        {
            id:"1",
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
        },
        {
            id:"2",
            title: "The Fellowship of the Ring",
            author: "J.R.R. Tolkien",
        },
        {
            id:"3",
            title: "Born a Crime",
            author: "Trevor Noah",
        }
    ];

    res.json(books);
}