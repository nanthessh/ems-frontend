import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    activeEmployees: 0,
    inactiveEmployees: 0,
    departments: 0,
  });

  useEffect(() => {
    // Call API when page loads
    axios.get("http://localhost:5000/api/dashboard/stats")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.error("Error fetching dashboard data:", err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Dashboard</h2>
      <div className="row g-4">
        {/* Total Employees */}
        <div className="col-md-3">
          <div className="card text-white bg-primary shadow-lg text-center">
            <div className="card-body">
              <h5 className="card-title">Total Employees</h5>
              <h3>{stats.totalEmployees}</h3>
            </div>
          </div>
        </div>

        {/* Active Employees */}
        <div className="col-md-3">
          <div className="card text-white bg-success shadow-lg text-center">
            <div className="card-body">
              <h5 className="card-title">Active Employees</h5>
              <h3>{stats.activeEmployees}</h3>
            </div>
          </div>
        </div>

        {/* Inactive Employees */}
        <div className="col-md-3">
          <div className="card text-white bg-danger shadow-lg text-center">
            <div className="card-body">
              <h5 className="card-title">Inactive Employees</h5>
              <h3>{stats.inactiveEmployees}</h3>
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="col-md-3">
          <div className="card text-white bg-warning shadow-lg text-center">
            <div className="card-body">
              <h5 className="card-title">Departments</h5>
              <h3>{stats.departments}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
