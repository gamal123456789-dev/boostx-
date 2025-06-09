import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-blue-400">XBoosting</h1>
      <input
        type="text"
        placeholder="Search games or offers..."
        className="bg-zinc-800 px-4 py-1 rounded-md border border-zinc-700 text-white w-1/3"
      />
      <div>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;