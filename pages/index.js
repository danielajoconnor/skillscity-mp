import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    alert("You clicked the button")

    // Make api call

    router.push("/books");
    // Navigate to the books page
  }

  return (
    <div className="w-full py-10 bg-red-100">Hello

    <button className="bg-blue-500 rounded px-4 py-1" onClick={handleClick}> Books Page</button>
    
    {/* <Link href="/books">
      Go to Books Page
    </Link> */}
    </div>
  )
}
