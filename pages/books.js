import Link from "next/link";
import Image from "next/image";
import BookGrid from "@/components/books/books-grid";

export default function BooksPage() {
    return (
        <div className="bg-green-100">
            Books Page
            {/* <Image src="" alt="" /> */}
            <BookGrid />
            <div>
                <Link href="/">
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
}