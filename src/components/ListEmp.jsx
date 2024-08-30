import React, { useState } from "react";

// Example data with objects
const employees = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Brown" },
  { id: 4, name: "David Wilson" },
  { id: 5, name: "Eva Green" },
  { id: 6, name: "Frank Wright" },
  { id: 7, name: "Grace Lee" },
];

const ListEmp = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handler for search input change
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter employees based on search term
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Employee Search</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <ul className="mt-4">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <li
              key={employee.id}
              className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              {employee.name}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No employees found</li>
        )}
      </ul>
    </div>
  );
};

export default ListEmp;
