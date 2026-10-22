import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';

const API_URL = 'https://worksheet-student.mashupstack.com';

function StudentList() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await axios.get(`${API_URL}/students`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = response.data;

        const studentData = Array.isArray(data)
          ? data
          : data.students || data.data?.students || data.data || [];

        setStudents(Array.isArray(studentData) ? studentData : []);
      } catch (err) {
        if (err.response?.status === 401 ||
            err.response?.status === 403) {
          dispatch(logout());
          navigate('/login', { replace: true });
          return;
        }

        setError('Unable to load students. Please try again.');
        console.error('Student API error:', err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchStudents();
    }
  }, [token, dispatch, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login', { replace: true });
  };

  return (
    <div className="student-container">
      <div className="student-header">
        <div>
          <h1>Student List</h1>
          <p>Welcome, {user?.user_name || user?.name || user?.email || 'User'}</p>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p>Loading students...</p>
      ) : students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Age</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={student.id ?? student._id ?? index}>
                  <td>{student.id ?? student._id ?? index + 1}</td>
                  <td>{student.name ?? student.user_name ?? 'N/A'}</td>
                  <td>{student.age ?? 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentList;
