// src/App.js
import React, { useState } from 'react';
import Student from './components/Student';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', present: false },
    { id: 2, name: 'Student 2', present: false },
    // Add more students
  ]);

  const toggleAttendance = (studentId) => {
    const updatedStudents = students.map((student) =>
      student.id === studentId ? { ...student, present: !student.present } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <h1>Attendance Marking</h1>
      {students.map((student) => (
        <Student key={student.id} student={student} toggleAttendance={toggleAttendance} />
      ))}
    </div>
  );
};

export default App;
