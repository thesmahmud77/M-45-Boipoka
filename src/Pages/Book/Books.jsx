import React, { Suspense } from "react";
import Book from "./Book";

const bookPromise = fetch(
  "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json",
).then((res) => res.json());

const Books = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl mt-10">This is Book Page</h1>
      <Suspense fallback={<h1>Loading</h1>}>
        <Book bookPromise={bookPromise}></Book>
      </Suspense>
    </div>
  );
};

export default Books;
