import { useEffect, useState } from "react";

function Asmaulhusna() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://asmaul-husna-api.vercel.app/api/all")
      .then((response) => response.json())
      .then((result) => {
        setData(result.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Gagal memuat data. Silakan coba lagi.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 py-10 px-4">
      {/* Header Asmaul Husna */}
      <div className="bg-sky-500 text-white py-4 px-6 text-left w-full shadow-md">
        <h2 className="text-2xl font-bold">Asmaul Husna</h2>
      </div>

      <div className="mt-6 text-center">
        {loading && <p className="text-gray-500">Memuat data...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center mt-6 px-4">
        {data.map((item) => (
          <div
            key={item.urutan}
            className="p-4 bg-blue-50 border border-blue-300 rounded-lg shadow-md flex flex-col items-center"
          >
            <p className="text-3xl font-bold text-blue-900">{item.arab}</p>
            <p className="text-lg font-semibold text-gray-800 mt-2">{item.latin}</p>
            <p className="text-gray-700 text-sm mt-1">{item.arti}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Asmaulhusna;
