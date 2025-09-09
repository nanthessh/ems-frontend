import React, { useState } from 'react';

function AddEmployee() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just alert the data (later connect API)
    alert(`Employee Added:\nName: ${name}\nEmail: ${email}\nPosition: ${position}\nSalary: ${salary}`);

    // Clear form
    setName('');
    setEmail('');
    setPosition('');
    setSalary('');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '450px', borderRadius: '15px' }}>
        <h3 className="text-center mb-4">Add Employee</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Position</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter job position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">Add Employee</button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
