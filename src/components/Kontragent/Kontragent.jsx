import React, { useState, useEffect } from 'react';
import './kontragent.css';

const Kontragent = () => {
  const [users, setUsers] = useState([]);

  // Получить пользователей с API
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Ошибка при загрузке:', error);
    }
  };

  // Удалить одного пользователя по id
  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
<div className="kontragentlar">
  <h2>Список контрагентов</h2>

  <button onClick={fetchUsers} style={{ marginBottom: '15px' }}>
    Получить пользователей
  </button>

  {users.length > 0 ? (
    <div className="user-table-wrapper">
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Компания</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.company.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  onClick={() => deleteUser(user.id)}
                  style={{ backgroundColor: 'red', color: 'white' }}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p>Список пуст.</p>
  )}
</div>

  );
};

export default Kontragent;
