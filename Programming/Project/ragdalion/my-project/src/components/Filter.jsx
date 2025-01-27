import React, { useState } from "react";
import Modal from "./Modal";
const Filter = ({ openModal }) => {
  return (
    <div className="flex items-center justify-between p-5 mt-8">
      <h1>Account</h1>
      <div className="flex gap-x-4">
        <div className="border rounded-md border-slate-600">
          <input
            type="search"
            className="px-2 py-2 rounded-md outline-none"
            placeholder="Search"
          />
        </div>
        <button
          className="px-4 py-2 text-white bg-purple-400"
          onClick={openModal}
        >
          Create New Account
        </button>
      </div>
    </div>
  );
};

export default Filter;
