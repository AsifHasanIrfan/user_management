import React from 'react';
import './App.css';
import Users from './components/Users';

function App() {
  return (
   <>
   <div className="w-full">
      <h1 className="text-3xl text-center font-medium mt-3">User-Management</h1>
      <div className="flex justify-center">
         <Users />
      </div>
   </div>
   </>
  );
}

export default App;
