

import React, { useState, useEffect } from 'react';

function Materials() {
  const [materials, setMaterials] = useState([]);
  const [materialData, setMaterialData] = useState({
    name: '',
    id: '',
    unit_price: '',
    quantity: '',
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentMaterialId, setCurrentMaterialId] = useState(null);

  // Fetch materials from the backend
  const fetchMaterials = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/materials'); // Adjust the API endpoint as necessary
      const data = await response.json();
      setMaterials(data);
    } catch (error) {
      console.error("Error fetching materials:", error);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setMaterialData({ ...materialData, [name]: value });
  }

  // Add a new material
  async function addMaterial() {
    try {
      const response = await fetch('http://127.0.0.1:5000/materials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(materialData),
      });
      const newMaterial = await response.json();
      setMaterials([...materials, newMaterial]);
      resetForm();
    } catch (error) {
      console.error("Error adding material:", error);
    }
  }

  // Delete a material
  async function deleteMaterial(id) {
    try {
      await fetch(`http://127.0.0.1:5000/materials/${id}`, {
        method: 'DELETE',
      });
      setMaterials(materials.filter(material => material.id !== id));
    } catch (error) {
      console.error("Error deleting material:", error);
    }
  }

  // Prepare to update a material
  function updateMaterial(id) {
    const material = materials.find(material => material.id === id);
    setMaterialData(material); // Pre-fill the form with material's data
    setIsUpdating(true); // Enable update mode
    setCurrentMaterialId(id); // Set the material being updated
  }

  // Handle the update process
  async function handleUpdate() {
    try {
      await fetch(`http://127.0.0.1:5000/materials/${currentMaterialId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(materialData),
      });

      // Re-fetch materials from the backend to ensure frontend sync
      fetchMaterials();
      resetForm();
    } catch (error) {
      console.error("Error updating material:", error);
    }
  }

  const resetForm = () => {
    setIsUpdating(false);
    setCurrentMaterialId(null);
    setMaterialData({ name: '', id: '', unit_price: '', quantity: '' });
  };

  return (
    <div>
      <h2>{isUpdating ? "Update Material" : "Add Material"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={materialData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={materialData.id}
        onChange={handleChange}
        disabled={isUpdating} // Disable ID change when updating
      />
      <input
        type="text"
        name="unit_price"
        placeholder="Unit Price"
        value={materialData.unit_price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        value={materialData.quantity}
        onChange={handleChange}
      />

      {isUpdating ? (
        <button onClick={handleUpdate}>OK</button> // OK button for updating
      ) : (
        <button onClick={addMaterial}>Add Material</button> // Add Material button
      )}

      <ul>
        {materials.map(material => (
          <li key={material.id}>
            <strong>Name:</strong> {material.name} <br />
            <strong>ID:</strong> {material.id} <br />
            <strong>Unit Price:</strong> {material.unit_price} <br />
            <strong>Quantity:</strong> {material.quantity} <br />
            <button onClick={() => deleteMaterial(material.id)}>Delete</button>
            <button onClick={() => updateMaterial(material.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Materials;
