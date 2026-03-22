import React from 'react';
import { Line } from 'react-chartjs-2';
import Card from '../components/Card';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

function Dashboard() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Users',
        data: [12, 19, 3, 5, 2],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard Overview</h2>
      <Card title="User Growth">
        <Line data={data} />
      </Card>
      <Card title="Quick Stats">
        <p>Total Users: 41</p>
        <p>Active Users: 30</p>
      </Card>
    </div>
  );
}

export default Dashboard;
