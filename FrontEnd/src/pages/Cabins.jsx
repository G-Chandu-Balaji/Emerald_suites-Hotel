import React from "react";
import CabinTable from "../components/CabinTable";
import CreateCabinForm from "../components/CreateCabinForm";

function Cabins() {
  return (
    <>
      {/* <h1>Cabin Table</h1> */}
      <CabinTable />
      <CreateCabinForm />
    </>
  );
}

export default Cabins;
