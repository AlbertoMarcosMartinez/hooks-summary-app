import React, { useEffect } from 'react';
import { useUserInfo } from '../../hooks/useUserIfo';

const UseEffectCard: React.FC = () => {
  const { user, userId, setUserId, isLoading, error } = useUserInfo();

  useEffect(() => {
    // Placeholder for useEffect logic
    // This is where you would implement the useEffect hook logic
    // For example, fetching data, setting up subscriptions, etc.
  }, [userId]); // Added userId as a dependency

  return (
    <div className="p-6">
      <h4 className="text-xl font-semibold mb-4 text-gray-800">
        useEffect with API Example
      </h4>      
      <div className="relative mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select User ID
        </label>
        <select
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                     appearance-none bg-white text-gray-700"
        >
          {[1, 2, 3, 4, 5].map((id) => (
            <option key={id} value={id}>
              User {id}
            </option>
          ))}
        </select>        
      </div>

      <div className="space-y-4">
        {isLoading && (
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200">
            {error}
          </div>
        )}

        {user && !isLoading && (
          <div className="bg-gray-50 rounded-lg shadow p-4 space-y-3">
            <div className="grid grid-cols-[120px,1fr] gap-2 items-center">
              <span className="text-sm text-gray-600">Name:</span>
              <span className="font-medium text-gray-800">{user.name}</span>
              <br/>
              <span className="text-sm text-gray-600">Email:</span>
              <span className="font-medium text-gray-800">{user.email}</span>
               <br/>
              <span className="text-sm text-gray-600">Phone:</span>
              <span className="font-medium text-gray-800">{user.phone}</span>
               <br/>
              <span className="text-sm text-gray-600">Website:</span>
              <span className="font-medium text-gray-800">{user.website}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UseEffectCard;