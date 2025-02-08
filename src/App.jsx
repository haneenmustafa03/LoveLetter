import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-gray-800">
      {/* Cute Header */}
      <h1 className="text-5xl font-bold text-pink-500 drop-shadow-lg">
        💖 Self-Love Counter 💖
      </h1>

      {/* Cute Counter Card */}
      <div className="mt-8 bg-white shadow-xl rounded-2xl p-6 text-center border-4 border-pink-300">
        <p className="text-xl font-semibold text-pink-600">
          Every click = a little more love for yourself! 💕
        </p>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="mt-4 px-6 py-3 bg-pink-400 hover:bg-pink-500 text-white font-bold text-lg rounded-full shadow-md transition-all duration-200"
        >
          Self-Love Count: {count}
        </button>
      </div>

      {/* Footer Message */}
      <p className="mt-6 text-lg text-gray-600">
        Take a moment to appreciate yourself today. You are amazing! ✨
      </p>
    </div>
  );
}

export default App;
