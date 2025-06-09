import React from 'react';

const games = [
  { name: 'New World', icon: '🎮' },
  { name: 'Black Desert', icon: '⚔️' },
  { name: 'PoE1', icon: '🧪' },
  { name: 'PoE2', icon: '🔮' },
  { name: 'Destiny 2', icon: '🚀' },
];

const HomePage = () => {
  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {games.map((game) => (
        <div
          key={game.name}
          className="bg-zinc-800 rounded-xl p-6 text-center hover:bg-zinc-700 transition cursor-pointer"
        >
          <div className="text-4xl mb-2">{game.icon}</div>
          <div className="font-semibold">{game.name}</div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;