import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
//   const [showSuccess,] = useState("")

  const handleChangeName = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handleChangeMessage = (event) => {
    const message = event.target.value;
    setMessage(message);
  };

  const handleSubmit = async (event) => {
    const response = await fetch(`/api/contact?name=${name}&email=${email}&message=${message}`)
    const date = await response.json();

    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="w-full">
      <Header name="Contact" />

      <Content>
        <form className="flex flex-col space-y-3">
          <input
            placeholder="Name"
            className="bg-gray-200 py-3 px-6 w-96 rounded"
            value={name}
            onChange={handleChangeName}
          />
          <input
            placeholder="Email"
            className="bg-gray-200 py-3 px-6 w-96 rounded"
            value={email}
            onChange={handleChangeEmail}
          />
          <textarea
            placeholder="Message"
            className="bg-gray-200 py-3 px-6 w-96 rounded"
            value={message}
            onChange={handleChangeMessage}
          />
          <button
            className="bg-blue-500 py-3 px-6 w-96 rounded text-white"
            onClick={handleSubmit}
            type="button"
            >
                Submit
            </button>
        </form>
      </Content>

      <Footer title="Home" href="/" />
    </div>
  );
}
