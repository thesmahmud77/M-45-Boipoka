import React, { use } from "react";
import SingleBook from "./SingleBook.Jsx";

const Book = ({ bookPromise }) => {
  const bookData = use(bookPromise);
  console.log(bookData);
  return (
    <div className="grid grid-cols-3 gap-5 mt-8">
      {bookData.map((singleBook) => (
        <SingleBook singleBook={singleBook}></SingleBook>
      ))}
    </div>
  );
};

export default Book;
