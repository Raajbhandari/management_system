// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
//  <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
//         <div className="container mx-auto p-4 flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-pink-600">Eventify!</h1>
//           <div className="flex items-center">
//             <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-300 mr-6">Home</a>
//             <button
//               onClick={() => navigate('/admin/register')}
//               className="text-gray-700 hover:text-pink-600 transition mr-6 duration-300"
//             >
//               Register
//             </button>
//             <button
//               onClick={() => navigate('/admin/login')}
//               className="text-gray-700 hover:text-pink-600 transition duration-300"
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       </nav>
//     <div className="flex flex-col justify-center items-center min-h-screen  space-y-8">
//       <h1 className="text-3xl font-bold mb-8">Welcome to the Admin Dashboard!</h1>
      
//       {/* Section for User Dashboard */}
//       <div className="bg-white shadow-md p-6 rounded-md w-1/2 text-center">
//         <h2 className="text-2xl font-semibold mb-4">User Section</h2>
//         <p className="mb-4">Manage all user-related tasks here.</p>
//         <button
//           onClick={() => navigate('/user/dashboard')}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//         >
//           Go to User Dashboard
//         </button>
//       </div>

//       {/* Section for Vendor Dashboard */}
//       <div className="bg-white shadow-md p-6 rounded-md w-1/2 text-center">
//         <h2 className="text-2xl font-semibold mb-4">Vendor Section</h2>
//         <p className="mb-4">Manage all vendor-related tasks here.</p>
//         <button
//           onClick={() => navigate('/vendor/dashboard')}
//           className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//         >
//           Go to Vendor Dashboard
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// // AdminDashboard.js
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const AdminDashboard = () => {
// //   const navigate = useNavigate();
// //   const [eventData, setEventData] = useState({ name: '', date: '', category: '' });

// //   const handleAddEvent = async () => {
// //     try {
// //       await axios.post('http://localhost:8080/api/admin/add-event', eventData, {
// //         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
// //       });
// //       alert('Event added successfully');
// //     } catch (error) {
// //       alert('Failed to add event');
// //     }
// //   };

// //   const handleRemoveEvent = async (eventId) => {
// //     try {
// //       await axios.delete(`http://localhost:8080/api/admin/remove-event/${eventId}`, {
// //         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
// //       });
// //       alert('Event removed successfully');
// //     } catch (error) {
// //       alert('Failed to remove event');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-8">
// //       <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

// //       {/* Form to Add Event */}
// //       <div className="bg-white shadow-md p-6 mb-8 rounded-md">
// //         <h2 className="text-2xl font-semibold mb-4">Add New Event</h2>
// //         <input
// //           type="text"
// //           placeholder="Event Name"
// //           className="w-full mb-4 p-2 border"
// //           onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
// //         />
// //         <input
// //           type="date"
// //           className="w-full mb-4 p-2 border"
// //           onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Event Category"
// //           className="w-full mb-4 p-2 border"
// //           onChange={(e) => setEventData({ ...eventData, category: e.target.value })}
// //         />
// //         <button
// //           className="bg-blue-500 text-white px-4 py-2 rounded-md"
// //           onClick={handleAddEvent}
// //         >
// //           Add Event
// //         </button>
// //       </div>

// //       {/* Section for Removing Events */}
// //       <div className="bg-white shadow-md p-6 rounded-md">
// //         <h2 className="text-2xl font-semibold mb-4">Remove Event</h2>
// //         <input
// //           type="text"
// //           placeholder="Event ID"
// //           className="w-full mb-4 p-2 border"
// //           onChange={(e) => handleRemoveEvent(e.target.value)}
// //         />
// //         <button
// //           className="bg-red-500 text-white px-4 py-2 rounded-md"
// //           onClick={() => handleRemoveEvent(eventData._id)}
// //         >
// //           Remove Event
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [editEvent, setEditEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    price: '',
    images: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Function to fetch vendor events (placeholder)
  const fetchVendorEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/events', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setEvents(response.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  // Load events when the component mounts
  useEffect(() => {
    fetchVendorEvents();
  }, []);

  const handleAddEvent = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await axios.post(
        'http://localhost:8080/events/add',
        {
          ...newEvent,
          images: newEvent.images.split(','), // Convert comma-separated string to array
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      console.log('Event added:', response.data);
      fetchVendorEvents(); // Refresh events after adding
      setNewEvent({ title: '', description: '', price: '', images: '' }); // Reset form
      setSuccessMessage('Event added successfully!');
    } catch (error) {
      // Improved error handling
      if (error.response) {
        setError(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        setError('No response received');
      } else {
        setError('Error in request: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle section selection (User or Vendor)
  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    if (section === 'user') {
      // Fetch user-related events or set dummy data
      // setEvents(dummyUserEvents);
    } else if (section === 'vendor') {
      fetchVendorEvents(); // Fetch vendor-related events from the API
    }
  };

  //Handle delete event
  const handleDeleteEvent = (eventId) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event._id !== eventId));
  };

  // const handleDeleteEvent = async (eventId) => {
  //   try {
  //     // Send DELETE request to server
  //     await axios.delete(`http://localhost:8080/events/delete/${eventId}`, {
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem('token')}`,
  //       },
  //     });
  //     // Remove event from state
  //     setEvents((prevEvents) => prevEvents.filter((event) => event._id !== eventId));
  //     setSuccessMessage('Event deleted successfully');
  //   } catch (error) {
  //     setError('Failed to delete event');
  //   }
  // };

  // Handle edit event - Opens the edit form
  const handleEditEvent = (eventId) => {
    const eventToEdit = events.find((event) => event._id === eventId);
    setEditEvent(eventToEdit);
  };

  // Handle save event after editing
  const handleSaveEdit = () => {
    setEvents((prevEvents) =>
      prevEvents.map((event) => (event._id === editEvent._id ? editEvent : event))
    );
    setEditEvent(null); // Close edit form
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-pink-600">Eventify!</h1>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center min-h-screen space-y-8 pt-24">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Section for User and Vendor Dashboard */}
        {!selectedSection && (
          <div className="flex space-x-8">
            {/* User Section */}
            <div
              onClick={() => handleSectionSelect('user')}
              className="bg-white shadow-md p-6 rounded-md w-64 text-center cursor-pointer"
            >
              <h2 className="text-2xl font-semibold mb-4">User Section</h2>
              <p>Manage all user-related events here.</p>
            </div>

            {/* Vendor Section */}
            <div
              onClick={() => handleSectionSelect('vendor')}
              className="bg-white shadow-md p-6 rounded-md w-64 text-center cursor-pointer"
            >
              <h2 className="text-2xl font-semibold mb-4">Vendor Section</h2>
              <p>Manage all vendor-related events here.</p>
            </div>
          </div>
        )}

        {/* Events Display Section */}
        {selectedSection && (
          <div className="bg-white shadow-md p-6 rounded-md w-1/2 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              {selectedSection === 'user' ? 'User Events' : 'Vendor Events'}
            </h2>
            <button
              onClick={() => setSelectedSection(null)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-700 transition"
            >
              Back
            </button>

            {/* List of Events */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">My Events</h2>
              {loading ? (
                <p>Loading events...</p>
              ) : events.length > 0 ? (
                <ul>
                  {events.map((event) => (
                    <li key={event._id} className="flex justify-between items-center border-b py-2">
                      <div>
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                        <p className="text-gray-800">Price: Rs. {event.price * 1}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteEvent(event._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEditEvent(event._id)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <img src={event.images[0]} alt={event.title} className="w-20 h-20 object-cover rounded-md" />
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No events added yet.</p>
              )}
            </div>
          </div>
        )}

        {/* Edit Event Form */}
        {editEvent && (
          <div className="bg-white shadow-md p-6 rounded-md w-1/2 text-center mt-4">
            <h2 className="text-2xl font-semibold mb-4">Edit Event</h2>
            <input
              type="text"
              value={editEvent.title}
              onChange={(e) => setEditEvent({ ...editEvent, title: e.target.value })}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              placeholder="Event Title"
            />
            <textarea
              value={editEvent.description}
              onChange={(e) => setEditEvent({ ...editEvent, description: e.target.value })}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              placeholder="Event Description"
            />
            <input
              type="number"
              value={editEvent.price}
              onChange={(e) => setEditEvent({ ...editEvent, price: e.target.value })}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              placeholder="Event Price"
            />
            <button
              onClick={handleSaveEdit}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;