import React, { useState } from 'react';

const SearchComponent = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');

  const fetchCapsules = async () => {
    const response = await fetch('https://api.spacexdata.com/v4/capsules');
    const jsonData = await response.json();
    setData(jsonData);
  };

  const handleSearch = () => {
    fetchCapsules();
  };

  return (
    <div className="mt-10 mx-auto max-w-screen-xl bg-transparent p-4 rounded-lg shadow-md md:bg-gray-100 w-4/5">
      <h2 className="text-xl mb-4">Search SpaceX Capsule Data only</h2>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">Status:</label>
          <select
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">None</option>
            <option value="retired">Retired</option>
            <option value="unknown">Unknown</option>
            <option value="active">Active</option>
            <option value="destroyed">Destroyed</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium">Type:</label>
          <select
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">None</option>
            <option value="Dragon 1.0">Dragon 1.0</option>
            <option value="Dragon 1.1">Dragon 1.1</option>
            <option value="Dragon 2.0">Dragon 2.0</option>
          </select>
        </div>
        <button
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="mt-4 overflow-y-auto max-h-[50vh]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data
            .filter((capsule) => {
              if (status && capsule.status !== status) return false;
              if (type && capsule.type !== type) return false;
              return true;
            })
            .map((capsule) => (
              <div key={capsule.serial} className="bg-white p-1 shadow rounded">
                <p className="font-semibold">
                  {capsule.type}, {capsule.serial}
                </p>
                <p>Reused {capsule.reuse_count} times</p>
                <p>{capsule.launches ? `${capsule.launches.length} launches` : 'N/A'}</p>
                <p>{capsule.water_landings || 'N/A'} water landings</p>
                <p>{capsule.land_landings || 'N/A'} land landings</p>
                <p  className={`font-semibold ${
                    capsule.status === 'retired'
                      ? 'text-red-500'
                      : capsule.status === 'active'
                      ? 'text-green-500'
                      : capsule.status === 'unknown'
                      ? 'text-yellow-500'
                      : ''
                  }`}>Status: {capsule.status || 'N/A'}</p>
                <p>{capsule.last_update || 'N/A'}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
