import React from 'react';
import Card from '../components/Card';

function Users() {
  return (
    <div>
      <h2>Users Page</h2>
      <Card title="User List">
        <ul>
          <li>John Doe</li>
          <li>Jane Smith</li>
          <li>Mike Johnson</li>
        </ul>
      </Card>
    </div>
  );
}

export default Users;
