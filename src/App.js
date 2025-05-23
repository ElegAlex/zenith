import React, { useEffect, useState } from 'react';
import PromptList from './PromptList';
import PromptForm from './PromptForm';

function App() {
  const [prompts, setPrompts] = useState(() => {
    const saved = localStorage.getItem('prompts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('prompts', JSON.stringify(prompts));
  }, [prompts]);

  const addPrompt = (prompt) => {
    setPrompts((prev) => [...prev, prompt]);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Zenith Prompts</h1>
      <PromptForm onAdd={addPrompt} />
      <PromptList prompts={prompts} />
    </div>
  );
}

export default App;
