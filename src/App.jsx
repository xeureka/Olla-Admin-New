import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import PlaceList from './pages/PlaceList';
import UserList from './pages/UserList';
import Community from './pages/Community';
import Trip from './pages/Trip';
import Providers from './pages/Providers';
import Feeds from './pages/Feeds';

// Lucide Icons
import { MapPin, User, MessageCircle, Compass, FileText, ShoppingCart } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className='bg-[#e8f5e9] h-screen '>
      <Navbar searchbar={true} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        <Link to="/placeList" className="border rounded-xl shadow p-4 hover:shadow-lg transition flex items-start gap-3">
          <MapPin className="text-green-500" />
          <div>
            <h3 className="text-xl font-semibold">Places</h3>
            <p>You'll find all Places registered to the system here.</p>
          </div>
        </Link>

        <Link to="/userList" className="border rounded-xl shadow p-4 hover:shadow-lg transition flex items-start gap-3">
          <User className="text-green-500" />
          <div>
            <h3 className="text-xl font-semibold">Users</h3>
            <p>You'll find all users registered to the system here.</p>
          </div>
        </Link>

        <Link to="/communityList" className="border rounded-xl shadow p-4 hover:shadow-lg transition flex items-start gap-3">
          <MessageCircle className="text-green-500" />
          <div>
            <h3 className="text-xl font-semibold">Communities</h3>
            <p>You'll find all communities registered to the system here.</p>
          </div>
        </Link>

        <Link to="/tripGuideList" className="border rounded-xl shadow p-4 hover:shadow-lg transition flex items-start gap-3">
          <Compass className="text-green-500" />
          <div>
            <h3 className="text-xl font-semibold">Trip Guides</h3>
            <p>You'll find all trip guides registered to the system here.</p>
          </div>
        </Link>

        <Link to="/feedList" className="border rounded-xl shadow p-4 hover:shadow-lg transition flex items-start gap-3">
          <FileText className="text-green-500" />
          <div>
            <h3 className="text-xl font-semibold">Feeds</h3>
            <p>You'll find all feeds registered to the system here.</p>
          </div>
        </Link>

        <Link to="/providersList" className="border rounded-xl shadow p-4 hover:shadow-lg transition flex items-start gap-3">
          <ShoppingCart className="text-green-500" />
          <div>
            <h3 className="text-xl font-semibold">Providers</h3>
            <p>You'll find all providers registered to the system here.</p>
          </div>
        </Link>
      </div>

      

      {/* Routes */}
      <Routes>
        <Route path="/placeList" element={<PlaceList />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/communityList" element={<Community />} />
        <Route path="/tripGuideList" element={<Trip />} />
        <Route path="/feedList" element={<Feeds />} />
        <Route path="/providersList" element={<Providers />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
