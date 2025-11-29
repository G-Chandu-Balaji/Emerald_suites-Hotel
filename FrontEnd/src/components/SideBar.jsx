import React from "react";
import { NavLink } from "react-router";

function SideBar() {
  return (
    <div className="  row-span-full">
      <div className="">
        <img
          className="h-[100px]"
          src="https://images.seeklogo.com/logo-png/53/1/emerald-hotel-logo-png_seeklogo-535618.png?v=1957813754941888560"
          alt=""
        />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/bookings">Bookings</NavLink>
          </li>
          <li>
            <NavLink to="/cabins">Cabins</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
