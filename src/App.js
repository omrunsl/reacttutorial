import React from 'react';
import Navbar from './components/Navbar'
import User from './components/User'
import './App.css';



function App() {
  return (
    <div className="container">
      <Navbar />
      <hr/>
      <User
      name="Ömer ÜNSAL"
      salary="1000"
      department="Bilişim"
      />

      <User
      name="Ahmet ÜNSAL"
      salary="1500"
      department="Muhasebe"
      />
    </div>
  );
}

export default App;
