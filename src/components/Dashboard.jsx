import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Lucide Icons
import { MapPin, User, MessageCircle, Compass, FileText, ShoppingCart } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <Navbar searchbar={true} />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DashboardCard
            icon={<MapPin className="text-green-500 w-6 h-6" />}
            title="Places"
            to="/placeList"
            description="You'll find all Places registered to the system here."
          />

          <DashboardCard
            icon={<User className="text-green-500 w-6 h-6" />}
            title="Users"
            to="/userList"
            description="You'll find all users registered to the system here."
          />

          <DashboardCard
            icon={<MessageCircle className="text-green-500 w-6 h-6" />}
            title="Communities"
            to="/communityList"
            description="You'll find all communities registered to the system here."
          />

          <DashboardCard
            icon={<Compass className="text-green-500 w-6 h-6" />}
            title="Trip Guides"
            to="/tripGuideList"
            description="You'll find all trip guides registered to the system here."
          />

          <DashboardCard
            icon={<FileText className="text-green-500 w-6 h-6" />}
            title="Feeds"
            to="/feedList"
            description="You'll find all feeds registered to the system here."
          />

          <DashboardCard
            icon={<ShoppingCart className="text-green-500 w-6 h-6" />}
            title="Providers"
            to="/providersList"
            description="You'll find all providers registered to the system here."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Card component
const DashboardCard = ({ icon, title, to, description }) => (
  <Link
    to={to}
    className="border rounded-xl shadow p-4 hover:shadow-lg transition flex items-start gap-3"
  >
    {icon}
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </Link>
);

export default Dashboard;
