import React from "react";
import { Route, Routes } from "react-router-dom";
import EventDetails from "./EventDetails";

function Eventlist() {
  return (
    <div>
      <Routes>
        <Route path="/EventDetails" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default Eventlist;
