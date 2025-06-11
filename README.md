# Movies4u 🎬

A modern movie search application built with React and Vite, powered by the OMDB API.

## Deployment URL
- https://movie4-u-pi.vercel.app/

## 🚀 Features

- Search movies and TV series
- View detailed movie information
- Responsive design with Tailwind CSS
- State management with Redux
- Fast development with Vite

## 🛠️ Tech Stack

- **Frontend Framework:** React
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** Redux
- **API:** OMDB API

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OMDB API key

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/saurabhsingh98/Movie4U.git
cd Movies4u
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
Create a `.env` file in the root directory and add your OMDB API key:
```env
VITE_OMDB_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

## 🔍 OMDB API Integration

### Base Configuration
```javascript
const BASE_URL = 'https://www.omdbapi.com'
const API_KEY = process.env.VITE_OMDB_API_KEY
```

### Search Endpoint
```javascript
GET: ${BASE_URL}?api_key=${API_KEY}&s=${SEARCH_KEYWORD}
```

### Response Format
```json
{
  "Search": [
    {
      "Title": "Movie Title",
      "Year": "Release Year",
      "imdbID": "tt1234567",
      "Type": "movie/series",
      "Poster": "Poster URL"
    }
  ],
  "totalResults": "Number of results",
  "Response": "True/False"
}
```

### MovieDetails Endpoint
```javascript
GET: ${BASE_URL}?api_key=${API_KEY}&i=${imdb_id}
```

### Response Format
```json
{
    "Title": "Movie Title",
    "Year": "Release Year",
    "Rated": "Rating",
    "Released": "Release Date",
    "Runtime": "Duration",
    "Genre": "Genre List",
    "Director": "Director Name",
    "Writer": "Writer Name",
    "Actors": "Actor List",
    "Plot": "Movie Description",
    "Language": "Language",
    "Country": "Country",
    "Awards": "Awards",
    "Poster": "Poster URL",
    "Ratings": [
        {
            "Source": "Rating Source",
            "Value": "Rating Value"
        }
    ],
    "Metascore": "Metascore",
    "imdbRating": "IMDB Rating",
    "imdbVotes": "Number of Votes",
    "imdbID": "IMDB ID",
    "Type": "movie/series",
    "totalSeasons": "Number of Seasons",
    "Response": "True/False"
}