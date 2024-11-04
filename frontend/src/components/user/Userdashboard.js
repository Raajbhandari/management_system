// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUsers, FaCheckCircle } from 'react-icons/fa';
// import axios from 'axios';

// const UserDashboard = () => {
//   const [selectedEvents, setSelectedEvents] = useState([]);
//   const [guestList, setGuestList] = useState([]);
//   const [orderStatus, setOrderStatus] = useState('Pending');
//   const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
//   const [newGuest, setNewGuest] = useState('');
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const navigate = useNavigate();

//   // Predefined events
//   const predefinedEvents = [
//     { name: 'Wedding', img: 'https://media.istockphoto.com/id/1314780540/photo/indian-traditional-wedding-ceremony-photography.jpg?b=1&s=612x612&w=0&k=20&c=M9fUJtk8veFCZjE96JEKe-p3fpuwg8wutyMzfqSBTd0=' },
//     { name: 'Birthday Party', img: 'https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=600' },
//     { name: 'Anniversary', img: 'https://images.pexels.com/photos/11219290/pexels-photo-11219290.jpeg?auto=compress&cs=tinysrgb&w=600' }
//   ];

//   // Function to handle event selection
//   const handleSelectEvent = (eventName) => {
//     switch (eventName) {
//       case 'Wedding':
//         navigate('/events/wedding');
//         break;
//       case 'Birthday Party':
//         navigate('/events/birthday');
//         break;
//       case 'Anniversary':
//         navigate('/events/anniversary');
//         break;
//       default:
//         break;
//     }
//   };

//   const fetchVendorEvents = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:8080/events', {
//         headers: {
//           authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you're storing JWT token in localStorage
//         }
//       });
//       setEvents(response.data); // Set the events from the API
//       setError(''); // Clear error message
//     } catch (error) {
//       console.error(error);
//       setError('Failed to fetch vendor events. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVendorEvents();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
//       {/* Navbar */}
//       <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
//         <div className="container mx-auto p-4 flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-pink-600">Eventify!</h1>
//           <div className="flex items-center">
//             <div className="mr-6">
//               <a className="text-gray-700 hover:text-pink-600 transition duration-300" href="/">Home</a>
//             </div>
//             <div className="mr-6">
//               <a className="text-gray-700 hover:text-pink-600 transition duration-300" href="/user/register">Register</a>
//             </div>
//             <div className="mr-6">
//               <a className="text-gray-700 hover:text-pink-600 transition duration-300" href="/user/login">Login</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-24 text-center text-white">
//         <div className="container mx-auto p-8">
//           <h2 className="text-5xl font-bold mb-4">Let's Plan Your Perfect Event!</h2>
//           <p className="text-lg mb-8">Create magical moments with Eventify. Manage events, track guests, and confirm bookings with ease.</p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Display predefined and API fetched events */}
//             {predefinedEvents.concat(events).map((event, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
//                 onClick={() => handleSelectEvent(event.name || event.title)}
//               >
//                 <img
//                   src={event.img || (event.images && event.images[0])}
//                   alt={event.name || event.title}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold text-gray-800">{event.name || event.title}</h3>
//                   <p className="text-gray-600 mt-2">
//                     Click to explore the {event.name?.toLowerCase() || event.title?.toLowerCase()} event ideas.</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default UserDashboard

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';

const UserDashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Predefined events
  const predefinedEvents = [
    { name: 'Wedding', img: 'https://media.istockphoto.com/id/1314780540/photo/indian-traditional-wedding-ceremony-photography.jpg?b=1&s=612x612&w=0&k=20&c=M9fUJtk8veFCZjE96JEKe-p3fpuwg8wutyMzfqSBTd0=' },
    { name: 'Birthday Party', img: 'https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Anniversary', img: 'https://images.pexels.com/photos/11219290/pexels-photo-11219290.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  // Fetch events from API
  const fetchVendorEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/events', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setEvents(response.data);
    } catch (error) {
      setError('Failed to fetch vendor events. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout=()=>{

    localStorage.removeItem('token');
  localStorage.removeItem('user');
    window.location.href = 'vendor/login'; 
  }
  useEffect(() => {
    fetchVendorEvents();
  }, []);

  // Handle event selection
  const handleSelectEvent = (eventName) => {
    switch (eventName) {
      case 'Wedding':
        navigate('/events/wedding');
        break;
      case 'Birthday Party':
        navigate('/events/birthday');
        break;
      case 'Anniversary':
        navigate('/events/anniversary');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      {/* Navbar */}
      <nav className="bg-gray-800 shadow-lg fixed top-0 w-full z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-teal-400">Eventify</h1>
          <div className="flex items-center space-x-6">
            <a className="text-gray-300 hover:text-teal-400 transition duration-300" href="/">Home</a>
            <a className="text-gray-300 hover:text-teal-400 transition duration-300" href="/user/register">Register</a>
            <a className="text-gray-300 hover:text-teal-400 transition duration-300" href="/user/login">Login</a>
            <a onClick={handleLogout} className="text-gray-300 hover:text-teal-400 transition duration-300" >Logout</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 text-center text-gray-200">
        <div className="container mx-auto p-8">
          <h2 className="text-5xl font-bold mb-4">Let's Plan Your Perfect Event!</h2>
          <p className="text-lg mb-8">Create magical moments with Eventify. Manage events, track guests, and confirm bookings with ease.</p>
          
          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {predefinedEvents.concat(events).map((event, index) => (
              <div
                key={index}
                className="bg-gray-800 text-gray-300 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => handleSelectEvent(event.name || event.title)}
              >
                <img
                  src={event.img || (event.images && event.images[0])}
                  alt={event.name || event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-teal-400">{event.name || event.title}</h3>
                  <p className="text-gray-400 mt-2">Click to explore the {event.name?.toLowerCase() || event.title?.toLowerCase()} event ideas.</p>
                </div>
              </div>
            ))}
          </div>

          {/* Loading/Error Messages */}
          {loading && <p className="mt-8 text-lg text-gray-400">Loading events...</p>}
          {error && <p className="mt-8 text-lg text-red-500">{error}</p>}
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;