import React, { useState } from "react";

// Example data to search
const items = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Strawberry",
];

const ListVa = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handler for search input change
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Search Component</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <ul className="mt-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No items found</li>
        )}
      </ul>
    </div>
  );
};

export default ListVa;
