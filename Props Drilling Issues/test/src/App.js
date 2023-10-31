import React, { useState } from 'react';
import ClassA from './ContextApi/ClassA';
import { UserContext } from './ContextApi/Context/UserContext';

function App() {
  const [input, setInput] = useState({
    user:{
      channel : 'Z&T Infotech',
      author: 'Tanmay Sir' 
    },
    
  })
  return (
    <div>
      <UserContext.Provider value={input.user}>
        <ClassA/>
      </UserContext.Provider>
    </div>
    
  );
}

export default App;
