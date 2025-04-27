import React, { useState } from 'react';

const PlaceForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    phoneNumber: '',
  });

  const types = ['cafe', 'hotel', 'lounge']; // Static options for now

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 max-w-2xl mx-auto"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 font-semibold">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-md p-2"
          placeholder="Enter place name"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="type" className="mb-1 font-semibold">Type</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border rounded-md p-2"
          required
        >
          <option value="">Select a type</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="phoneNumber" className="mb-1 font-semibold">Phone Number</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="border rounded-md p-2"
          placeholder="Enter phone number"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition"
      >
        Save
      </button>
    </form>
  );
};

export default PlaceForm;
