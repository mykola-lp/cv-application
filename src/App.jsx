import { useState } from 'react'

import { GeneralInfo, Education, Experience } from './components';

import './App.css'

function App() {
  return (
    <main className="container">
      <h1>CV Builder</h1>

      <section className="cv-sections">
        <div className="section-wrapper">
          <GeneralInfo />
        </div>

        <div className="section-wrapper">
          <Education />
        </div>

        <div className="section-wrapper">
          <Experience />
        </div>
      </section>
    </main>
  );
}

export default App
