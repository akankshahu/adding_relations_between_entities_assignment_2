import React, { useState } from 'react';

function Child({ sendDataToParent }) {
  const [childData, setChildData] = useState('');

  const handleSendData = () => {
    sendDataToParent(childData);
  };

  return (
    <div>
      <input
        type="text"
        value={childData}
        onChange={(e) => setChildData(e.target.value)}
        placeholder="Enter data"
      />
      <button onClick={handleSendData}>Send to Parent</button>
    </div>
  );
}

export default Child;