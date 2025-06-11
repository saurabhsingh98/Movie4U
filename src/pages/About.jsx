import React from 'react'

import { ACTION_MOVIES, COMEDY_MOVIES, DRAMA_MOVIES, SCI_FI_MOVIES } from '../../constant'

const About = () => {
  const genres = [
    {
      title: "Action",
      image: ACTION_MOVIES
    },
    {
      title: "Drama",
      image: DRAMA_MOVIES
    },
    {
      title: "Comedy",
      image: COMEDY_MOVIES
    },
    {
      title: "Sci-Fi",
      image: SCI_FI_MOVIES
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
            About Movies4u
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8 mb-16">
          <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
            <p className="text-lg leading-relaxed">
              Movies4u is your ultimate destination for discovering and exploring movies.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
            <p className="text-lg leading-relaxed">
              Our mission is to provide comprehensive information about movies, helping you make informed decisions about what to watch next.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
            <p className="text-lg leading-relaxed">
              Whether you're looking for the latest releases, classic films, or hidden gems, Movies4u has got you covered.
            </p>
          </div>
        </div>

        {/* Movie Genres Showcase */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
            Explore Different Genres
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {genres.map((genre, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img 
                  src={genre.image} 
                  alt={`${genre.title} movies`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {genre.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
