

import React, { useState, useEffect } from 'react';

function Clients() {
  const [clients, setClients] = useState([]);
  const [clientData, setClientData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone_number: '',
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentClientId, setCurrentClientId] = useState(null);

  // Fetch clients from the backend
  const fetchClients = () => {
    fetch('http://127.0.0.1:5000/clients')
      .then(response => response.json())
      .then(data => {
        setClients(data);
        console.log("Fetched clients:", data);  // Debugging line
      })
      .catch(error => console.error("Error fetching clients:", error));
  };

  useEffect(() => {
    fetchClients();  // Initial fetch on component mount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const addClient = () => {
    fetch('http://127.0.0.1:5000/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    })
      .then(response => response.json())
      .then(newClient => {
        setClients([...clients, newClient]);
        resetForm();
        fetchClients();  // Refetch after adding
      })
      .catch(error => console.error("Error adding client:", error));
  };

  const updateClient = () => {
    console.log('Current Client ID:', currentClientId);
    console.log('Client Data:', clientData);
    
    fetch(`http://127.0.0.1:5000/clients/${currentClientId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(updatedClient => {
        console.log('Updated client:', updatedClient);
        
        // Update the clients state properly
        setClients(prevClients =>
          prevClients.map(client =>
            client.id === currentClientId ? updatedClient : client
          )
        );
        
        resetForm();
        fetchClients();  // Refetch after updating
      })
      .catch(error => console.error("Error updating client:", error));
  };

  const resetForm = () => {
    setIsUpdating(false);
    setCurrentClientId(null);
    setClientData({
      company_name: '',
      contact_name: '',
      email: '',
      phone_number: '',
    });
  };

  return (
    <div>
      <h2>{isUpdating ? "Update Client" : "Add Client"}</h2>
      <input
        type="text"
        name="company_name"
        placeholder="Company Name"
        value={clientData.company_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="contact_name"
        placeholder="Contact Name"
        value={clientData.contact_name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={clientData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone_number"
        placeholder="Phone Number"
        value={clientData.phone_number}
        onChange={handleChange}
      />
      
      {isUpdating ? (
        <button onClick={updateClient}>Update Client</button>
      ) : (
        <button onClick={addClient}>Add Client</button>
      )}

      <ul>
        {clients.map(client => (
          <li key={client.id}>
            <strong>Company Name:</strong> {client.company_name} <br />
            <strong>ID:</strong> {client.id} <br />
            <strong>Contact Name:</strong> {client.contact_name} <br />
            <strong>Email:</strong> {client.email} <br />
            <strong>Phone Number:</strong> {client.phone_number} <br />
            <button onClick={() => {
              setClientData({
                company_name: client.company_name,
                contact_name: client.contact_name,
                email: client.email,
                phone_number: client.phone_number,
              });
              setIsUpdating(true);
              setCurrentClientId(client.id);
            }}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clients;
