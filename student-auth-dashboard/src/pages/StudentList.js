
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../features/auth/authSlice';

const API_URL = 'https://worksheet-student.mashupstack.com';

function StudentList() {
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
            Authorization: `Bearer ${user.token}`
          }
        });

        const data = response.data;

        const list = Array.isArray(data)
          ? data
          : data.students || data.data?.students || data.data || [];

        setStudents(Array.isArray(list) ? list : []);
      } catch (err) {
        if ([401, 403].includes(err.response?.status)) {
          dispatch(removeUser());
          navigate('/login', { replace: true });
          return;
        }

        console.error(
          'Student API error:',
          err.response?.data || err.message
        );

        setError('Unable to load students. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (user?.token) {
      fetchStudents();
    }
  }, [user, dispatch, navigate]);

  const handleLogout = () => {
    dispatch(removeUser());
    navigate('/login', { replace: true });
  };

  return (
    <div className="student-container">
      <div className="student-header">
        <div>
          <h1>Students List</h1>
          <p>Logged in as: {user?.email}</p>
        </div>

        <button onClick={handleLogout}>Logout</button>
      </div>

      {loading ? (
        <p>Loading students...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Age</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={student.id ?? student._id ?? index}>
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
