import React from "react";
import { Link } from "react-router-dom";

function Zoom() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="mb-4">Your zoom call is over</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <Link to={"/reviewform"}>Review form</Link>
        </button>
      </div>
    </div>
  );
}

export default Zoom;
