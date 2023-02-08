import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";
import Hero from "@/components/home/hero";
import Topics from "@/components/home/topics";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    alert("You clicked the button");

    // Make api call

    router.push("/books");
    // Navigate to the books page
  };

  return (
    <div className="w-full">
      <Header name="Home" />

      <Hero
        imgUrl="/assets/profile.jpg"
        title="Daniel"
        subtitle="I am a bootcamp student"
      />

      <Content>
        <div className="w-full flex flex-col">
          <Topics></Topics>

          <div>
            <button
              className="bg-blue-500 px-2 py-1 rounded"
              onClick={handleClick}
            >
              Click Me!
            </button>
          </div>
        </div>
      </Content>

      <Footer href="/books" title="Books Page" />
    </div>
  );
}
