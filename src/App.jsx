import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";

function App() {
  const [surah, setSurah] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
      .then((res) => res.json())
      .then((data) => setSurah(data.data));
  }, []);

  return (
    <div className="min-h-screen bg-blue-100">
      {/* Header */}
      <div className="bg-sky-500 text-white flex items-center justify-between p-4 shadow-md">
        <div className="flex items-center space-x-3">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/660/529/original/holy-al-quran-logo-vector.jpg"
            alt="Logo"
            className="w-8 h-8 rounded-full"
          />
          <h1 className="text-lg font-semibold">Al-Qur'an </h1>
        </div>
        <FaBars className="text-xl cursor-pointer" />
      </div>
      
      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search surah"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      {/* Surah List */}
      <div className="p-4 space-y-2">
        {surah
          .filter((s) => s.namaLatin.toLowerCase().includes(search.toLowerCase()))
          .map((s) => (
            <Link
              to={`/ayat/${s.nomor}`}
              key={s.nomor}
              className="block p-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-blue-200 transition"
            >
              <p className="text-lg font-semibold text-">{s.nomor}. {s.namaLatin}</p>
              <p className="text-gray-600 text-sm italic">{s.arti}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default App;
