
import './App.css';
import MarkDown from './components/MarkDown';
import React, { useState } from 'react'
import HTMLcontant from './components/HTMLcontant';

function App() {
  const [markdown, setMarkdown] = useState('# Welcome to my React Markdown Previewer!');
  const handleChange = (e) =>{
    setMarkdown(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <HTMLcontant markdown={markdown}/>
        <MarkDown markdown={markdown} handleChange={handleChange}/>
      </header>
      
    </div>
  );
}

export default App;
