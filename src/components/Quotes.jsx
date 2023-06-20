import { useState, useEffect } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url =
      `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

    fetch(url)
      .then(res => res.json())
      .then((data) => console.log(data.quotes));
  };

  return (
    <div className="max-w-[50rem] space-y-4 rounded-md bg-white px-12 py-6 shadow-xl drop-shadow-lg">
      <div className="leading-6 tracking-wide">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        maxime dolor expedita illum inventore dolores aliquam, eligendi hic,
        perferendis accusantium ullam voluptates quas dolorem doloribus rerum
        praesentium corporis qui voluptas.
      </div>
      <div className="text-end">
        <p>John Doe</p>
      </div>

      <div className="mx-auto w-[10rem] cursor-pointer">
        <button className="rounded border-2 border-black px-6 py-1.5 hover:bg-gray-100">
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quotes;
