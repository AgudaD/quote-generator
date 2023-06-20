import { useState, useEffect } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum]
        setQuote(randomQuote.quote)
        setAuthor(randomQuote.author)
      });
  };

  const handleClick = () => {
    getQuote();
  }

  return (
    <div className="max-w-[50rem] rounded-md bg-white px-12 py-6 shadow-xl drop-shadow-lg">
      <div className="leading-6 tracking-wide">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur vero ipsa officiis sapiente nostrum magni aliquam numquam odit quidem culpa, voluptatibus odio eius non eveniet perspiciatis, voluptate, cumque officia!
      </div>
      <div className="text-end mt-5">
        <p>lore</p>
      </div>

      <div className="mx-auto w-[10rem] cursor-pointer mt-12">
        <button className="rounded border-2 border-black px-6 py-1.5 hover:bg-gray-100" onClick={handleClick}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quotes;
