// import React, { useState } from "react";
// import CabinTable from "../components/CabinTable";
// import CreateCabinForm from "../components/CreateCabinForm";

// function Cabins() {
//   const [showForm, setShowForm] = useState(false);
//   return (
//     <>
//       {/* <h1>Cabin Table</h1> */}
//       <CabinTable />
//       <button
//         onClick={() => setShowForm(!showForm)}
//         className="bg-blue-600 text-amber-50 p-4 rounded-2xl w-[80%] mx-auto "
//       >
//         Add Cabin
//       </button>

//       {showForm && <CreateCabinForm />}
//     </>
//   );
// }

// export default Cabins;

import React, { useState } from "react";
import CabinTable from "../components/CabinTable";
import CreateCabinForm from "../components/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="container  space-y-8">
        {/* Cabin Table */}
        <CabinTable />

        {/* Toggle Form Button */}
        <div className="flex justify-center ">
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="bg-blue-600 text-amber-50 px-6 py-3 rounded-2xl w-[80%]  text-lg font-semibold hover:bg-blue-700 transition"
          >
            {showForm ? "Close Form" : "Add Cabin"}
          </button>
        </div>

        {/* Create Cabin Form */}
        {showForm && (
          <div className="">
            <CreateCabinForm />
          </div>
        )}
      </div>
    </>
  );
}

export default Cabins;
