import React from "react";
import Skip from "../components/Skip";
import Header from "../components/Header";
import Main from "../components/Main";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Player } from '@lottiefiles/react-lottie-player';
import { Home, User, LogIn } from 'lucide-react';


const HomeView = () => {
    return (
        <>
           <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">WhereRU</div>
        <div className="flex space-x-4">
          <a href="#" className="flex items-center text-gray-600 hover:text-purple-600">
            <Home className="mr-1" size={20} />
            Home
          </a>
          <a href="#" className="flex items-center text-gray-600 hover:text-purple-600">
            <LogIn className="mr-1" size={20} />
            Login
          </a>
          <a href="#" className="flex items-center text-gray-600 hover:text-purple-600">
            <User className="mr-1" size={20} />
            My Page
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-white text-center p-8">
        <h1 className="text-6xl font-bold mb-4">Welcome to WhereRU</h1>
        <p className="text-xl mb-8">Connect with friends and share your location in real-time!</p>
        
        {/* Lottie Animation */}
        <div className="w-64 h-64 mb-8">
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        
        <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded-full hover:bg-purple-100 transition duration-300">
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-600 text-center py-4">
        © 2024 WhereRU. All rights reserved.
      </footer>
    </div>
        </>
    )
}

export default HomeView;