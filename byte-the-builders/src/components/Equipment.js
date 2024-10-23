


import React, { useState, useEffect } from 'react';

function Equipment() {
  const [equipment, setEquipment] = useState([]);
  const [equipmentData, setEquipmentData] = useState({
    id: '',
    name: '',
    purchase_date: '',
    cost: '',
    maintenance_date: '',
    quantity: '',
    status: '',
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentEquipmentId, setCurrentEquipmentId] = useState(null);

  // Fetch equipment data from the backend
  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/equipments');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEquipment(data);
      } catch (error) {
        console.error("Error fetching equipment:", error);
      }
    };

    fetchEquipment();
  }, []);

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setEquipmentData({ ...equipmentData, [name]: value });
  }

  // Add new equipment
  async function addEquipment() {
    try {
      const response = await fetch('http://127.0.0.1:5000/equipments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(equipmentData),
      });
      const newEquipment = await response.json();
      setEquipment([...equipment, newEquipment]);
      resetForm();
    } catch (error) {
      console.error("Error adding equipment:", error);
    }
  }

  // Delete equipment
  async function deleteEquipment(id) {
    try {
      await fetch(`http://127.0.0.1:5000/equipments/${id}`, {
        method: 'DELETE',
      });
      setEquipment(equipment.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting equipment:", error);
    }
  }

  // Prepare to update equipment
  function updateEquipment(id) {
    const item = equipment.find(item => item.id === id);
    setEquipmentData(item);
    setIsUpdating(true);
    setCurrentEquipmentId(id);
  }

  // Handle update process
  async function handleUpdate() {
    try {
      const response = await fetch(`http://127.0.0.1:5000/equipments/${currentEquipmentId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(equipmentData),
      });
      const updatedEquipment = await response.json();
      setEquipment(equipment.map(item =>
        item.id === currentEquipmentId ? updatedEquipment : item
      ));
      resetForm();
    } catch (error) {
      console.error("Error updating equipment:", error);
    }
  }

  // Reset the form
  const resetForm = () => {
    setIsUpdating(false);
    setCurrentEquipmentId(null);
    setEquipmentData({ id: '', name: '', purchase_date: '', cost: '', maintenance_date: '', quantity: '', status: '' });
  };

  return (
    <div>
      <h2>{isUpdating ? "Update Equipment" : "Add Equipment"}</h2>
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={equipmentData.id}
        onChange={handleChange}
        disabled={isUpdating} // Disable ID field when updating
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={equipmentData.name}
        onChange={handleChange}
      />
      <input
        type="date"
        name="purchase_date"
        value={equipmentData.purchase_date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cost"
        placeholder="Cost"
        value={equipmentData.cost}
        onChange={handleChange}
      />
      <input
        type="date"
        name="maintenance_date"
        value={equipmentData.maintenance_date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        value={equipmentData.quantity}
        onChange={handleChange}
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={equipmentData.status}
        onChange={handleChange}
      />

      {isUpdating ? (
        <button onClick={handleUpdate}>OK</button>
      ) : (
        <button onClick={addEquipment}>Add Equipment</button>
      )}

      {/* List of equipment */}
      <ul>
        {equipment.map(item => (
          <li key={item.id}>
            <strong>ID:</strong> {item.id} <br />
            <strong>Name:</strong> {item.name} <br />
            <strong>Purchase Date:</strong> {item.purchase_date} <br />
            <strong>Cost:</strong> {item.cost} <br />
            <strong>Maintenance Date:</strong> {item.maintenance_date} <br />
            <strong>Quantity:</strong> {item.quantity} <br />
            <strong>Status:</strong> {item.status} <br />
            <button onClick={() => deleteEquipment(item.id)}>Delete</button>
            <button onClick={() => updateEquipment(item.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Equipment;

