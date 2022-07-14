import React, { useState } from "react";

const Header = ({ name, age, place, change_name }) => {
  const [books, setBooks] = useState([
    { id: 1, name: "Tom" },
    { id: 2, name: "Jerry" },
  ]);
  const addToBooks = () => {
    setBooks([...books, { id: books.length + 1, name: "Good" }]);
  };
  const removeBook = (id) => {
    let neBookList = books.filter((book) => book.id !== id);
    setBooks(neBookList);
  };
  return (
    <div>
      <p>Hi I am Header Component</p>
      <p>{name}</p>
      <p>{age}</p>
      <p>{place}</p>
      <button onClick={change_name}>Change Name</button>
      <button onClick={addToBooks}>Add Book</button>
      <ul>
        {books.map((book) => (
          <div key={book.id}>
            <li>{book.name}</li>
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Header;
