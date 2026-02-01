import React from "react";

const SingleBook = ({ singleBook }) => {
  const { bookName, category, image, review, tags } = singleBook;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm border-2 border-amber-200">
        <figure className="bg-gray-400 p-5">
          <img className="h-[200px]" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>{review}</p>
          <div className="card-actions justify-end">
            {tags.map((tagbtn) => (
              <button className="btn bg-amber-300 text-black">{tagbtn}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
