import React, { useReducer } from 'react';

// Initial state for the reducer
const initialState = {
  text: '',
  darkMode: false,
};

// Reducer function to manage state changes
const editorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    case 'TOGGLE_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'CLEAR_TEXT':
      return { ...state, text: '' };
    default:
      return state;
  }
};

// Main App component
const App = () => {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  // Handlers for text transformations and other actions
  const handleTextChange = (e) => {
    dispatch({ type: 'SET_TEXT', payload: e.target.value });
  };

  const handleUpperCase = () => {
    dispatch({ type: 'SET_TEXT', payload: state.text.toUpperCase() });
  };

  const handleLowerCase = () => {
    dispatch({ type: 'SET_TEXT', payload: state.text.toLowerCase() });
  };

  const handleClearText = () => {
    dispatch({ type: 'CLEAR_TEXT' });
  };

  const handleRemoveSpaces = () => {
    dispatch({ type: 'SET_TEXT', payload: state.text.replace(/\s+/g, ' ').trim() });
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(state.text);
  };

  // Calculations for text metrics
  const wordCount = state.text.trim().split(/\s+/).length;
  const charCount = state.text.length;
  const readingTime = (wordCount / 200).toFixed(2); // Assuming average reading speed of 200 words per minute

  return (
    <div className={`min-h-screen ${state.darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Text Editor</h1>
        <button 
          className="mb-4 p-2 border rounded"
          onClick={() => dispatch({ type: 'TOGGLE_MODE' })}
        >
          Toggle to {state.darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <div>
          <textarea
            className="w-full p-2 border rounded mb-4"
            rows="10"
            value={state.text}
            onChange={handleTextChange}
          ></textarea>
          <div className="mb-4">
            <button className="p-2 border rounded mr-2" onClick={handleUpperCase}>Uppercase</button>
            <button className="p-2 border rounded mr-2" onClick={handleLowerCase}>Lowercase</button>
            <button className="p-2 border rounded mr-2" onClick={handleClearText}>Clear Text</button>
            <button className="p-2 border rounded mr-2" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
            <button className="p-2 border rounded" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
          </div>
          <div className="mb-4">
            <p>Word Count: {wordCount}</p>
            <p>Character Count: {charCount}</p>
            <p>Reading Time: {readingTime} minutes</p>
          </div>
          <div className="border rounded p-2 bg-gray-100">
            <h2 className="text-lg font-bold mb-2">Document Preview:</h2>
            <p>{state.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
