import Link from "next/link";
import Image from "next/image";
import BookGrid from "@/components/books/books-grid";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";

export default function BooksPage() {
  return (
    <div className="w-full">
      <Header name="Books" />

      <Content>
        <div className="w-full max-w-7xl mx-auto mt-8">
          <BookGrid />
        </div>
      </Content>

      <Footer href="/" title="Home Page" />
    </div>
  );

  // return (
  //     <div className="bg-green-100">
  //         Books Page
  //         {/* <Image src="" alt="" /> */}
  //         <BookGrid />

  //     </div>
  // );
}
