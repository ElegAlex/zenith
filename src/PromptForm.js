import React, { useState } from 'react';

function PromptForm({ onAdd }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <input
        type="text"
        className="flex-grow border rounded px-2 py-1"
        placeholder="Enter a prompt"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Add
      </button>
    </form>
  );
}

export default PromptForm;
