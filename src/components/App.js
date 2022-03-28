import React from 'react'
import { useEffect, useState } from 'react';
import '../styles/App.css';
const App = () => {
  const [postCode, setpostCode] = useState(null);
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks POST Request Example' })
  };
  fetch('/api', requestOptions)
      .then(response => response.json())
      .then(data => setpostCode(data.code));
  }, [])

  return (
    <div id="main">
      <h1>Display the code you receive on doing a POST request in the given div</h1>
      <h2 id="postCode">{postCode}</h2>
    </div>
  )
}


export default App;
