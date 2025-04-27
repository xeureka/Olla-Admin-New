import React, { useState } from 'react';

const PlacesManager = () => {
  const [showForm, setShowForm] = useState(false);
  const [places, setPlaces] = useState([
    { name: 'Mamchatcha', type: 'code', model: '', number: '' },
    { name: 'Brunerra', type: '', model: '', number: '' },
    { name: 'Celsivie', type: '', model: '', number: '' },
    { name: 'Kiddis', type: 'Code', model: '', number: '' },
    { name: 'Sembassija', type: 'code', model: '', number: '' },
    { name: 'Belgit Cole', type: 'code', model: '', number: '' },
    { name: 'Turkish Shake Smoothie', type: 'code', model: '', number: '' },
    { name: 'Jayne Walker', type: 'code', model: '', number: '' },
    { name: 'Easter Rodriguez', type: 'head', model: '', number: '' },
    { name: 'German Lounge', type: 'code', model: '', number: '' },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    phone: '',
    qr: '',
    address: '',
    longtable: '',
    latitude: '',
    loop: '',
    oft: '',
    banner: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaces([...places, { 
      name: formData.name, 
      type: formData.type,
      model: '',
      number: ''
    }]);
    setShowForm(false);
    setFormData({
      name: '',
      type: '',
      phone: '',
      qr: '',
      address: '',
      longtable: '',
      latitude: '',
      loop: '',
      oft: '',
      banner: '',
      description: ''
    });
  };
  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      {/* Table Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-emerald-800 font-serif">File for</h1>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg 
              hover:bg-emerald-700 transition-all duration-300
              flex items-center gap-2 shadow-md hover:shadow-emerald-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add New Place
          </button>
        </div>

        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-emerald-600 text-white">
              <th className="p-3 text-left font-medium">File</th>
              <th className="p-3 text-left font-medium">Code</th>
              <th className="p-3 text-left font-medium">Model</th>
              <th className="p-3 text-left font-medium">Number</th>
            </tr>
          </thead>
          <tbody>
            {places.map((place, index) => (
              <tr 
                key={index} 
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-emerald-50'} hover:bg-emerald-100 transition-colors`}
              >
                <td className="p-3 border-b border-emerald-100">{place.name}</td>
                <td className="p-3 border-b border-emerald-100">{place.type}</td>
                <td className="p-3 border-b border-emerald-100">{place.model}</td>
                <td className="p-3 border-b border-emerald-100">{place.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Place Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-2xl border-4 border-emerald-50 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-emerald-800 border-b-2 border-emerald-100 pb-4">
              🌿 Add New Place
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full p-3 border-2 border-emerald-100 rounded-lg
                        focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200
                        placeholder-emerald-300 transition-all"
                      placeholder="The name of the place"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <div className="absolute right-3 top-3 text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Type Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">Type</label>
                  <div className="relative">
                    <select
                      className="w-full p-3 border-2 border-emerald-100 rounded-lg
                        focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200
                        appearance-none bg-white pr-10 transition-all"
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      required
                    >
                      <option value="">Select a type</option>
                      <option value="code">Code</option>
                      <option value="head">Head</option>
                    </select>
                    <div className="absolute right-3 top-3 text-emerald-400 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Add other fields with similar styling */}

              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 pt-6 border-t border-emerald-100">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2.5 rounded-lg border-2 border-emerald-100
                    text-emerald-600 hover:bg-emerald-50 transition-colors
                    font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg
                    hover:bg-emerald-700 transition-colors font-medium
                    shadow-md hover:shadow-emerald-200/50"
                >
                  Create Place
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacesManager;