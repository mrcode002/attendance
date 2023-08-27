// src/components/Student.js
import React from 'react';

const Student = ({ student, toggleAttendance }) => {
  return (
    <div className="student">
      <span>{student.name}</span>
      <button onClick={() => toggleAttendance(student.id)}>
        {student.present ? 'Present' : 'Absent'}
      </button>
    </div>
  );
};

export default Student;
