import AddTable from "../components/AddTable";
import CabinTable from "../components/CabinTable";

function Cabins() {
  return (
    <>
      <div className="container  space-y-8">
        {/* Cabin Table */}
        <CabinTable />
        <AddTable />
      </div>
    </>
  );
}

export default Cabins;
