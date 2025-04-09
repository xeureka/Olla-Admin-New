import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'


// Lucide Icons

const App = () => {
  return (
    <div className='bg-[#e8f5e9] h-screen '>
      <Navbar searchbar={true} />
      <Dashboard />


    </div>
  );
};

export default App;
