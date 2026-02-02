import { useLocation } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const BirthdayCard = () => {
  const { state } = useLocation();
  const { username, imageUrl } = state || {};

  // const playaudio = () => {
  //   const audio = new Audio(song);
  //   audio.play();
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 p-6">
      
      <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl w-full max-w-2xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 py-10 text-center">
          <h1 className="text-4xl font-extrabold text-white">
            🎉 Happy Birthday 🎉
          </h1>
        </div>

        {/* PLAY BUTTON */}
        <div className="flex justify-center -mt-6">
          <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95">
            <FaPlay className="text-xl ml-1"  />
          </button>
        </div>

        {/* IMAGE (NO OVERLAP) */}
        <div className="flex justify-center mt-8">
          <div className="rounded-full p-2 bg-gradient-to-tr from-pink-500 to-purple-500 shadow-xl">
            <img
              src={imageUrl}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            {username}
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Wishing you a day filled with happiness, laughter, and unforgettable moments 💖
          </p>

          <div className="mt-8 inline-block px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg">
            🎂 Have a wonderful year ahead 🎂
          </div>
        </div>

      </div>
    </div>
  );
};

export default BirthdayCard;
