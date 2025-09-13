import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from '../services/employeeService';

function ViewEmployees() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState({ id: null, name: '', email: '', position: '' });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees', error);
    }
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleAdd = () => {
    setEditMode(false);
    setCurrentEmployee({ id: null, name: '', email: '', position: '' });
    handleShow();
  };

  const handleEdit = (employee) => {
    setEditMode(true);
    setCurrentEmployee(employee);
    handleShow();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await deleteEmployee(id);
        loadEmployees();
      } catch (error) {
        console.error('Error deleting employee', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await updateEmployee(currentEmployee);
      } else {
        await addEmployee(currentEmployee);
      }
      handleClose();
      loadEmployees();
    } catch (error) {
      console.error('Error saving employee', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">View Employees</h2>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary" onClick={handleAdd}>Add Employee</Button>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp, index) => (
              <tr key={emp.id}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.position}</td>
                <td>
                  <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(emp)}>Edit</Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(emp.id)}>Delete</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit Employee' : 'Add Employee'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={currentEmployee.name}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={currentEmployee.email}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, email: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                value={currentEmployee.position}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, position: e.target.value })}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              {editMode ? 'Update Employee' : 'Add Employee'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ViewEmployees;
