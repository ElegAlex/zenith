import React from 'react';

function PromptList({ prompts }) {
  if (!prompts.length) {
    return <p>No prompts yet.</p>;
  }
  return (
    <ul className="list-disc pl-5 space-y-1">
      {prompts.map((p, index) => (
        <li key={index}>{p}</li>
      ))}
    </ul>
  );
}

export default PromptList;
