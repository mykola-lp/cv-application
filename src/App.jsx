import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import { GeneralInfo } from './components';

import './App.css'

function App() {
  return (
    <main className="container">
      <h1>CV Builder</h1>

      <GeneralInfo />
    </main>
  );
}

export default App
