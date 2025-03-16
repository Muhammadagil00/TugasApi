import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBook, FaPrayingHands, FaStarAndCrescent, FaMosque } from "react-icons/fa";

function Home() {
    const navigate = useNavigate();
    
    return (                                                                                                                                                           
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center justify-center p-6 relative">
            
            {/* Gambar Dekoratif */}
           

            <h1 className="text-center text-4xl font-extrabold text-blue-900 mb-8 drop-shadow-lg">QariPlus🌙 </h1>
            
            {/* Card 1 - Al-Qur'an */}
            <div onClick={() => navigate('/app')} className="cursor-pointer bg-white shadow-lg rounded-2xl p-6 w-full max-w-md flex items-center space-x-4 transform transition-all hover:scale-105 hover:shadow-2xl">
                <FaBook className="text-blue-500 text-3xl" />
                <div>
                    <h2 className="text-xl font-semibold">Al-Qur'an</h2>
                    <p className="text-gray-600">Bacaan dan ayat-ayat suci Al-Qur'an</p>
                </div>
            </div>

            {/* Card 2 - Doa */}
            <div onClick={() => navigate('/doa')} className="cursor-pointer bg-white shadow-lg rounded-2xl p-6 w-full max-w-md flex items-center space-x-4 mt-4 transform transition-all hover:scale-105 hover:shadow-2xl">
                <FaPrayingHands className="text-blue-500 text-3xl" />
                <div>
                    <h2 className="text-xl font-semibold">Doa</h2>
                    <p className="text-gray-600">Kumpulan doa harian dan penting</p>
                </div>
            </div>

            {/* Card 3 - Asmaul Husna */}
            <div onClick={() => navigate('/AsmaulHusna')} className="cursor-pointer bg-white shadow-lg rounded-2xl p-6 w-full max-w-md flex items-center space-x-4 mt-4 transform transition-all hover:scale-105 hover:shadow-2xl">
                <FaStarAndCrescent className="text-blue-500 text-3xl" />
                <div>
                    <h2 className="text-xl font-semibold">Asmaul Husna</h2>
                    <p className="text-gray-600">99 Nama Allah yang Indah</p>
                </div>
            </div>

            {/* Dekorasi Bawah */}
            <div className="absolute bottom-5 text-gray-700 text-sm">
                <FaMosque className="inline-block text-yellow-500" /> 
                <span> Selamat Menunaikan Ibadah Ramadhan </span>
                <FaMosque className="inline-block text-yellow-500" />
            </div>
        </div>
    );
}

export default Home;
