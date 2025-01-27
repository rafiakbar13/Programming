import { useState, useEffect } from "react";
import Modal from "react-modal";

const Modals = ({ isOpen, closeModal, type, addUser }) => {
  console.log(type);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleUser = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      role,
    };
    addUser(newUser);
    setName("");
    setEmail("");
    setPassword("");
    setRole("");
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      className="fixed inset-0 z-10 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
    >
      <div className="relative z-20 w-1/2 bg-white rounded-lg h-3/4">
        <div className="absolute top-0 right-0 p-2">
          <button
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Close"
            onClick={closeModal}
          >
            <svg
              className="w-4 h-4 text-gray-600"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.778 3.222a.75.75 0 010 1.061L9.06 8l4.718 4.718a.75.75 0 11-1.06 1.06L8 9.06l-4.718 4.72a.75.75 0 11-1.06-1.06L6.94 8 2.222 3.282a.75.75 0 111.06-1.06L8 6.94l4.718-4.72a.75.75 0 011.06 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col h-full">
          <div className="flex-grow p-4">
            <h2 className="mb-4 text-xl font-bold">
              {type === "Edit" ? "edit" : "Add"} User
            </h2>
            <form onSubmit={handleUser}>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="role"
                >
                  Role
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="role"
                  type="role"
                  placeholder="Role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
            </form>
          </div>
          {/* Action */}
          <div className="flex-shrink-0 p-4 border-t border-gray-200">
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mr-2 text-sm font-bold text-white bg-gray-500 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                type="button"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm font-bold text-white bg-orange-500 rounded hover:bg-orange-400 focus:outline-none focus:bg-orange-400"
                type="button"
                onClick={handleUser}
              >
                {type === "edit" ? "edit" : "Add"} User
              </button>
            </div>
          </div>
          {/* end action */}
        </div>
      </div>
    </Modal>
  );
};

export default Modals;
