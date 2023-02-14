import { useState } from "react";

export default function BookItem({ book }) {
  const [likes, setLikes] = useState(+book.likes);

  const handleLike = async () => {
    let newLikes = likes + 1;
    setLikes(newLikes);

    const id = book.id;
    const response = await fetch(
      `/api/increase-likes?id=${id}&likes=${newLikes}`
    );
    const data = await response.json();
  };

  return (
    <div className="bg-red-100">
      <p>{book.title}</p>
      <p>{book.author}</p>
      <button
        className="bg-blue-500 px-2 py-1 rounded text-white"
        onClick={handleLike}
        type="button"
      >
        Like ({likes} likes)
      </button>
    </div>
  );
}
