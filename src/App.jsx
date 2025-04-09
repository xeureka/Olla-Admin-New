import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout'; // Import shared layout
import Dashboard from './components/Dashboard';
import PlaceList from './pages/PlaceList';
import UserList from './pages/UserList';
import Community from './pages/Community';
import Trip from './pages/Trip';
import Providers from './pages/Providers';
import Feeds from './pages/Feeds';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/placeList" element={<PlaceList />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/communityList" element={<Community />} />
        <Route path="/tripGuideList" element={<Trip />} />
        <Route path="/providersList" element={<Providers />} />
        <Route path="/feedList" element={<Feeds />} />
      </Route>
    </Routes>
  );
};

export default App;
