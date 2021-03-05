import React from 'react';
import './App.css';
import { requestPermission } from './firebaseServices/firebaseservice'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    requestPermission()
  }, [])
  return (
    <div className="App">
     <h1>hello world</h1>
    </div>
  );
}

export default App;
