import React, { useState } from "react";
import { MENU } from "../constant/menu";
import { USERS } from "../constant/User";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Table from "./Table";
import Filter from "./Filter";
import Modal from "./Modal";
const Layout = () => {
  const [users, setUsers] = useState(USERS);
  const [isOpenSidebar, setIsOpenSideBar] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleDelete = (id) => {
    setUsers(users.filter((user, index) => index !== id));
  };

  const handleSidebarDisplay = () => {
    setIsOpenSideBar(!isOpenSidebar);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const addUser = (user) => {
    setUsers([...users, user]);
    setIsOpenModal(false);
  };

  const updateUser = (id, updatedUser) => {
    const updatedUsers = users.map((user, index) =>
      index === id ? updatedUser : user
    );
    setUsers(updatedUsers);
    closeModal();
  };

  return (
    <div className="flex min-h-screen">
      {isOpenSidebar && (
        <div className="w-[250px] px-5">
          <Sidebar menu={MENU} isOpen={isOpenSidebar} />
        </div>
      )}
      <div className="w-full">
        <Navbar onClick={handleSidebarDisplay} />
        {/* Table */}
        <Filter openModal={openModal} />
        <Table
          users={users}
          onDelete={handleDelete}
          openModal={openModal}
          updateUser={updateUser}
        />
        <Modal
          type="add"
          isOpen={isOpenModal}
          closeModal={closeModal}
          addUser={addUser}
          users={users}
        />
      </div>
    </div>
  );
};

export default Layout;
