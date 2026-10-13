
import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    studentName: '',
    rollNumber: '',
    studentClass: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    const name = studentName.trim();
    const roll = rollNumber.trim();
    const className = studentClass.trim();

    if (!name || !roll || !className) {
      alert('Please fill in all fields.');
      return;
    }

    const rollExists = students.some(
      (student) =>
        student.rollNumber.toLowerCase() === roll.toLowerCase()
    );

    if (rollExists) {
      alert('Roll number already exists. Please enter a unique roll number.');
      return;
    }

    const nextId =
      students.reduce(
        (maxId, student) => Math.max(maxId, Number(student.id) || 0),
        0
      ) + 1;

    const newStudent = {
      id: nextId,
      studentName: name,
      rollNumber: roll,
      studentClass: className,
    };

    setStudents((previousStudents) => [
      ...previousStudents,
      newStudent,
    ]);

    setStudentName('');
    setRollNumber('');
    setStudentClass('');
  }

  function startEdit(student) {
    setEditingId(student.id);

    setEditForm({
      studentName: student.studentName,
      rollNumber: student.rollNumber,
      studentClass: student.studentClass,
    });
  }

  function handleEditChange(e) {
    const { name, value } = e.target;

    setEditForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  function saveEdit(id) {
    const name = editForm.studentName.trim();
    const roll = editForm.rollNumber.trim();
    const className = editForm.studentClass.trim();

    if (!name || !roll || !className) {
      alert('Please fill in all fields.');
      return;
    }

    const rollExists = students.some(
      (student) =>
        student.id !== id &&
        student.rollNumber.toLowerCase() === roll.toLowerCase()
    );

    if (rollExists) {
      alert('Roll number already exists. Please use a unique roll number.');
      return;
    }

    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              studentName: name,
              rollNumber: roll,
              studentClass: className,
            }
          : student
      )
    );

    setEditingId(null);
  }

  function cancelEdit() {
    setEditingId(null);
    setEditForm({
      studentName: '',
      rollNumber: '',
      studentClass: '',
    });
  }

  function deleteStudent(id) {
    setStudents((previousStudents) =>
      previousStudents.filter((student) => student.id !== id)
    );

    if (editingId === id) {
      cancelEdit();
    }
  }

  const filteredStudents = students.filter((student) =>
    student.studentName
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="page-header">
        <h1>Student List Management</h1>
        <p>Manage student details easily</p>
      </header>

      <section className="form-card">
        <h2>Add New Student</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            <input
              id="studentName"
              type="text"
              placeholder="Enter student name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rollNumber">Roll Number</label>
            <input
              id="rollNumber"
              type="text"
              placeholder="Enter roll number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="studentClass">Class</label>
            <input
              id="studentClass"
              type="text"
              placeholder="e.g. 10A or Grade 12"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Student
          </button>
        </form>
      </section>

      <section className="list-card">
        <div className="list-heading">
          <h2>Student List</h2>
          <span className="student-count">
            Total: {students.length}
          </span>
        </div>

        <div className="search-group">
          <label htmlFor="searchStudent">Search Students</label>
          <input
            id="searchStudent"
            type="search"
            placeholder="Search by student name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Roll Number</th>
                <th>Class</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="5" className="empty-message">
                    No students found
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>

                    {editingId === student.id ? (
                      <>
                        <td>
                          <input
                            aria-label="Edit student name"
                            name="studentName"
                            value={editForm.studentName}
                            onChange={handleEditChange}
                            required
                          />
                        </td>

                        <td>
                          <input
                            aria-label="Edit roll number"
                            name="rollNumber"
                            value={editForm.rollNumber}
                            onChange={handleEditChange}
                            required
                          />
                        </td>

                        <td>
                          <input
                            aria-label="Edit class"
                            name="studentClass"
                            value={editForm.studentClass}
                            onChange={handleEditChange}
                            required
                          />
                        </td>

                        <td className="actions">
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => saveEdit(student.id)}
                          >
                            Save
                          </button>

                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={cancelEdit}
                          >
                            Cancel
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{student.studentName}</td>
                        <td>{student.rollNumber}</td>
                        <td>{student.studentClass}</td>

                        <td className="actions">
                          <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => startEdit(student)}
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteStudent(student.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default App;
