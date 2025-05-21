import React, { useState } from 'react'
import './profile.css'

const Profile = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log("error: " + error);
    }
  }

  return (
    <div className='Profile'>
      <div className='btn_holder'>
              <h1>Ishchilar ro'yxati</h1>
      <button onClick={loadUsers}>Load Employees</button>
      </div>


      <div className="user-list">
        {users.map((user) => (
          <div className='user' key={user.id}>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile
