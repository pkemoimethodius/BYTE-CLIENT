

// import React, { useState, useEffect } from 'react';

// function Employees() {
//   const [employees, setEmployees] = useState([]);
//   const [employeeData, setEmployeeData] = useState({
//     first_name: '',
//     last_name: '',
//     role: '',
//     email: '',
//     phone_number: '',
//     hire_date: '',
//     salary: '',
//   });
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [currentEmployeeId, setCurrentEmployeeId] = useState(null);

//   // Fetch employees from the backend
//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:5000/employees');
//         const data = await response.json();
//         setEmployees(data);
//       } catch (error) {
//         console.error("Error fetching employees:", error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   // Handle input changes
//   function handleChange(e) {
//     const { name, value } = e.target;
//     setEmployeeData({ ...employeeData, [name]: value });
//   }

//   // Add a new employee
//   function addEmployee() {
//     fetch('http://127.0.0.1:5000/employees', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(employeeData),
//     })
//       .then(response => response.json())
//       .then(newEmployee => {
//         setEmployees([...employees, newEmployee]);
//         resetForm();
//       })
//       .catch(error => console.error("Error adding employee:", error));
//   }

//   // Prepare to update an employee
//   function updateEmployee(id) {
//     const employee = employees.find(emp => emp.id === id);
//     setEmployeeData(employee); // Pre-fill the form with the employee's data
//     setIsUpdating(true); // Enable update mode
//     setCurrentEmployeeId(id); // Set the employee being updated
//   }

//   // Handle the update process using PATCH method
//   function handleUpdate() {
//     fetch(`http://127.0.0.1:5000/employees/${currentEmployeeId}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(employeeData),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(updatedEmployee => {
//         setEmployees(employees.map(employee =>
//           employee.id === currentEmployeeId ? updatedEmployee : employee
//         ));
//         resetForm();
//       })
//       .catch(error => console.error("Error updating employee:", error));
//   }

//   const resetForm = () => {
//     setIsUpdating(false);
//     setCurrentEmployeeId(null);
//     setEmployeeData({
//       first_name: '',
//       last_name: '',
//       role: '',
//       email: '',
//       phone_number: '',
//       hire_date: '',
//       salary: '',
//     });
//   };

//   return (
//     <div>
//       <h2>{isUpdating ? "Update Employee" : "Add Employee"}</h2>
//       <input
//         type="text"
//         name="first_name"
//         placeholder="First Name"
//         value={employeeData.first_name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="last_name"
//         placeholder="Last Name"
//         value={employeeData.last_name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="role"
//         placeholder="Role"
//         value={employeeData.role}
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={employeeData.email}
//         onChange={handleChange}
//       />
//       <input
//         type="tel"
//         name="phone_number"
//         placeholder="Phone"
//         value={employeeData.phone_number}
//         onChange={handleChange}
//       />
//       <input
//         type="date"
//         name="hire_date"
//         value={employeeData.hire_date}
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         name="salary"
//         placeholder="Salary"
//         value={employeeData.salary}
//         onChange={handleChange}
//       />

//       {isUpdating ? (
//         <button onClick={handleUpdate}>OK</button> // OK button for updating
//       ) : (
//         <button onClick={addEmployee}>Add Employee</button> // Add Employee button
//       )}

//       <ul>
//         {employees.map(employee => (
//           <li key={employee.id}>
//             <strong>First Name:</strong> {employee.first_name} <br />
//             <strong>Last Name:</strong> {employee.last_name} <br />
//             <strong>Role:</strong> {employee.role} <br />
//             <strong>Email:</strong> {employee.email} <br />
//             <strong>Phone Number:</strong> {employee.phone_number} <br />
//             <strong>Hire Date:</strong> {employee.hire_date} <br />
//             <strong>Salary:</strong> {employee.salary} <br />
//             <button onClick={() => updateEmployee(employee.id)}>Update</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Employees;

import React, { useState, useEffect } from 'react';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [employeeData, setEmployeeData] = useState({
    first_name: '',
    last_name: '',
    role: '',
    email: '',
    phone_number: '',
    hire_date: '',
    salary: '',
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentEmployeeId, setCurrentEmployeeId] = useState(null);

  // Fetch employees from the backend
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('https://byte-server-pwaq.onrender.com/employees');
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  }

  // Add a new employee
  function addEmployee() {
    fetch('https://byte-server-pwaq.onrender.com/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    })
      .then(response => response.json())
      .then(newEmployee => {
        console.log("New Employee Added:", newEmployee); // Debugging line
        setEmployees([...employees, newEmployee]);
        resetForm();
      })
      .catch(error => console.error("Error adding employee:", error));
  }

  // Prepare to update an employee
  function updateEmployee(id) {
    const employee = employees.find(emp => emp.id === id);
    setEmployeeData(employee); // Pre-fill the form with the employee's data
    setIsUpdating(true); // Enable update mode
    setCurrentEmployeeId(id); // Set the employee being updated
  }

  // Handle the update process using PATCH method
  function handleUpdate() {
    fetch(`https://byte-server-pwaq.onrender.com/employees/${currentEmployeeId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(updatedEmployee => {
        setEmployees(employees.map(employee =>
          employee.id === currentEmployeeId ? updatedEmployee : employee
        ));
        resetForm();
      })
      .catch(error => console.error("Error updating employee:", error));
  }

  const resetForm = () => {
    setIsUpdating(false);
    setCurrentEmployeeId(null);
    setEmployeeData({
      first_name: '',
      last_name: '',
      role: '',
      email: '',
      phone_number: '',
      hire_date: '',
      salary: '',
    });
  };

  return (
    <div>
      <h2>{isUpdating ? "Update Employee" : "Add Employee"}</h2>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={employeeData.first_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={employeeData.last_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={employeeData.role}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={employeeData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone_number"
        placeholder="Phone"
        value={employeeData.phone_number}
        onChange={handleChange}
      />
      <input
        type="date"
        name="hire_date"
        value={employeeData.hire_date}
        onChange={handleChange}
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={employeeData.salary}
        onChange={handleChange}
      />

      {isUpdating ? (
        <button onClick={handleUpdate}>OK</button> // OK button for updating
      ) : (
        <button onClick={addEmployee}>Add Employee</button> // Add Employee button
      )}

      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <strong>First Name:</strong> {employee.first_name} <br />
            <strong>Last Name:</strong> {employee.last_name} <br />
            <strong>Role:</strong> {employee.role} <br />
            <strong>Email:</strong> {employee.email} <br />
            <strong>Phone Number:</strong> {employee.phone_number} <br />
            <strong>Hire Date:</strong> {employee.hire_date} <br />
            <strong>Salary:</strong> {employee.salary} <br />
            <button onClick={() => updateEmployee(employee.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;



