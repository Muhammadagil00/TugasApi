import { useEffect, useState } from "react";

const Doa = () => {
  const [doas, setDoas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://open-api.my.id/api/doa")
      .then((response) => response.json())
      .then((data) => {
        setDoas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen font-[Amiri]">
      {/* Header mirip dengan "Al-Qur'an Indonesia" tapi teks di kiri */}
      <div className="w-full bg-sky-500 py-4 shadow-md flex items-center">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg pl-4">
          Kumpulan Doa
        </h1>
      </div>

      <div className="p-8 bg-gradient-to-b from-blue-100 to-white w-full flex flex-col items-center">
        {loading && <p className="text-gray-500 animate-pulse">Memuat doa...</p>}
        {error && <p className="text-red-500">Terjadi kesalahan: {error}</p>}

        {doas.length > 0 && (
          <div className="grid grid-cols-2 gap-6 max-w-6xl w-full">
            {doas.map((doa, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 bg-opacity-90 flex flex-col items-start"
              >
                <h2 className="text-2xl font-extrabold text-sky-800 mb-3 uppercase tracking-wide">
                  {doa.judul}
                </h2>
                <hr className="border-t-4 border-gray-400 mb-5 w-3/4" />

                <p className="text-3xl leading-relaxed text-gray-900 font-semibold text-right w-full">
                  {doa.arab}
                </p>
                <p className="text-lg text-gray-700 italic mt-4 px-4">
                  {doa.latin}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Doa;
