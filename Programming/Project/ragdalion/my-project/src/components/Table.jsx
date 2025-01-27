import React from "react";
import Modal from "./Modal";
const Table = ({ onDelete, users, openModal, updateUser }) => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.status}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="">
                <button className="px-3 py-1 text-white bg-blue-400 rounded-sm">
                  Detail
                </button>
              </td>
              <td>
                <button
                  className="px-3 py-1 text-white bg-orange-400 rounded-sm"
                  onClick={openModal}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => onDelete(index)}
                  className="px-3 py-1 text-white bg-red-500 rounded-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        type="Edit"
        isOpen={isOpenModal}
        closeModal={closeModal}
        updateUser={updateUser}
      />
    </div>
  );
};

export default Table;
