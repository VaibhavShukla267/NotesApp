# NotesApp
# react_basics

TO push code 
git add .
git commit -m "My changes"
git push origin main


To install taiwnind css
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



@tailwind base;
@tailwind components;
@tailwind utilities;

download Vite
npm create vite@latest

npm install react-redux @reduxjs/toolkit react-router-dom