import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Ayat() {
  const { nomorSurah } = useParams();
  const [surah, setSurah] = useState([]);
  const [judul, setJudul] = useState("");

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${nomorSurah}`)
      .then((res) => res.json())
      .then((data) => {
        setSurah(data.data.ayat);
        setJudul(`${data.data.nomor}. ${data.data.namaLatin}`);
      });
  }, [nomorSurah]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-sky-700 mb-6">
        {judul}
      </h1>
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        {surah.map((ayat) => (
          <div
            key={ayat.nomor}
            className="p-5 border border-gray-300 bg-gray-50 rounded-lg mb-5 shadow-md"
          >
            <p className="text-3xl text-right font-[Amiri] font-bold text-gray-900 leading-relaxed">
              {ayat.teksArab}
            </p>
            <p className="text-gray-600 text-md mt-2 italic">{ayat.teksIndonesia}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ayat;
