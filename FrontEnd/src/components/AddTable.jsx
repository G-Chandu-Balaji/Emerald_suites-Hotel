import React, { useState } from "react";
import CreateCabinForm from "../components/CreateCabinForm";
import Modal from "./Modal";

function AddTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Toggle Form Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-amber-50 px-4 py-2 rounded-lg   text-lg font-semibold hover:bg-blue-700 transition"
      >
        {isModalOpen ? "Close Form" : "Add Cabin"}
      </button>

      {/* Create Cabin Form */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CreateCabinForm onCloseModal={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}
export default AddTable;
