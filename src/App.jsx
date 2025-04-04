import React, { useState } from 'react';
import Child from './Child';

function App() {
  const [parentData, setParentData] = useState('');

  const handleDataFromChild = (data) => {
    setParentData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {parentData}</p>
      <Child sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default App;