import React, { useEffect, useState } from 'react';

const Kontragent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Получение данных при загрузке компонента
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Ошибка при загрузке:', error));
  }, []);

  return (
    <div className="kontragentlar">
      <h2>Список контрагентов</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Компания</th>
            <th>Email</th>
            <th>Телефон</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.company.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Kontragent;
