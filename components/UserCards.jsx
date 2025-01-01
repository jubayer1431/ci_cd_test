import { use } from 'react';
import { fetchUsers } from '@/lib/fetchUsers';

export default function UserCards() {
  const users = use(fetchUsers());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div key={user.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2 text-emerald-600">{user.name}</h2>
            <p className="text-gray-600 mb-4">@{user.username}</p>
            <div className="mb-4">
              <p className="text-gray-700">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong> {user.website}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">
                <strong>Company:</strong> {user.company.name}
              </p>
              <p className="text-gray-700 italic">"{user.company.catchPhrase}"</p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Address:</strong>
              </p>
              <p className="text-gray-700">
                {user.address.street}, {user.address.suite}
              </p>
              <p className="text-gray-700">
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
