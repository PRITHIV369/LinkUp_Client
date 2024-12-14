import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>All Users</h2>
      <ul>
        {users.map(user => (
          <li key={user._id} className="user-item">
            {user.profilePic && (
              <img src={user.profilePic} alt={`${user.name}'s profile`} width="50" height="50" />
            )}
            <div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
