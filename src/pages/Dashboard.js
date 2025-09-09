import React from 'react';

function Dashboard() {
  // Temporary dummy data (later will come from API)
  const totalEmployees = 50;
  const activeEmployees = 45;
  const inactiveEmployees = 5;
  const departments = 6;

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Dashboard</h2>
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary shadow-lg text-center">
            <div className="card-body">
              <h5 className="card-title">Total Employees</h5>
              <h3>{totalEmployees}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-success shadow-lg text-center">
            <div className="card-body">
              <h5 className="card-title">Active Employees</h5>
              <h3>{activeEmployees}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-danger shadow-lg text-center">
            <div className="card-body">
              <h5 className="card-title">Inactive Employees</h5>
              <h3>{inactiveEmployees}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-warning shadow-lg text-center">
            <div className="card-body">
              <h5 className="card-title">Departments</h5>
              <h3>{departments}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
