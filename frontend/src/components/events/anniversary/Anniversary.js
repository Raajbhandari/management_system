// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Anniversary = () => {
//   const navigate = useNavigate();

//   const handleDetailRedirect = (type) => {
//     navigate(`/weddings/${type}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
//       {/* Navbar */}
//       <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
//         <div className="container mx-auto p-4 flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-pink-600">Eventify!</h1>
//           <div className="flex items-center">
//             <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-300 mr-6">Home</a>
//             <button
//               onClick={() => navigate('/vendor-events')}
//               className="text-gray-700 hover:text-pink-600 transition duration-300"
//             >
//               Vendor Events
//             </button>
//           </div>
//         </div>
//       </nav>
      
//       {/* Content Section */}
//       <section className="relative pt-24 text-center text-white">
//         <div className="container mx-auto p-8">
//           <h2 className="text-5xl font-bold mb-4">Anniversary Event</h2>
//           <p className="text-lg mb-8">Explore the beauty and elegance of our Anniversary packages.</p>

//           {/* Image Gallery */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM72kUw15QSO_uuhV5UGgrg6mW9sHc9YF02Q&s" alt="Wedding 1" className="rounded-lg w-96 h-80" />
//             <img src="https://images.pexels.com/photos/16879007/pexels-photo-16879007/free-photo-of-wedding-reception-venue.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding 2" className="rounded-lg w-96 h-80" />
//             <img src="https://images.pexels.com/photos/17023005/pexels-photo-17023005/free-photo-of-beautifully-decorated-tables-in-a-luxury-restaurant-hall.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding 3" className="rounded-lg w-96 h-80" />
//             <img src="https://images.pexels.com/photos/12846023/pexels-photo-12846023.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding 4" className="rounded-lg w-96 h-80" />
//           </div>

//           {/* Wedding Types Section */}
//           <h2 className="text-3xl font-bold mt-12 mb-6">Types of Anniversary Party</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Destination Wedding */}
//             <div className="relative bg-cover bg-center rounded-lg h-64" style={{ backgroundImage: 'url(https://images.pexels.com/photos/24334710/pexels-photo-24334710/free-photo-of-woman-and-man-in-traditional-clothing-in-wedding-ceremony.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
//               <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center text-white p-4">
//                 <h3 className="text-2xl font-bold mb-2">Destination Anniversary Party</h3>
//                 <p className="text-sm mb-4">Have a magical wedding in a stunning location of your choice.</p>
//                 <button onClick={() => handleDetailRedirect('destination-wedding')} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//                   More Details
//                 </button>
//               </div>
//             </div>

//             {/* Beach Wedding */}
//             <div className="relative bg-cover bg-center rounded-lg h-64" style={{ backgroundImage: 'url(https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
//               <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center text-white p-4">
//                 <h3 className="text-2xl font-bold mb-2">Beach Anniversary Party</h3>
//                 <p className="text-sm mb-4">Celebrate your love with a romantic beach wedding.</p>
//                 <button onClick={() => handleDetailRedirect('beach-wedding')} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//                   More Details
//                 </button>
//               </div>
//             </div>

//             {/* Traditional Wedding */}
//             <div className="relative bg-cover bg-center rounded-lg h-64" style={{ backgroundImage: 'url(https://www.tourmyindia.com/blog//wp-content/uploads/2018/10/Culture-Bank.jpg)' }}>
//               <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center text-white p-4">
//                 <h3 className="text-2xl font-bold mb-2">Traditional Anniversary Party</h3>
//                 <p className="text-sm mb-4">Enjoy the beauty of a classic traditional wedding.</p>
//                 <button onClick={() => handleDetailRedirect('traditional-wedding')} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//                   More Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Anniversary;


import React, { useState } from 'react';

const Anniversary = () => {
  // State to manage selected package price
  const [selectedPrice, setSelectedPrice] = useState(0);

  // Handler function to update the selected price
  const handlePackageSelection = (price) => {
    setSelectedPrice(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-pink-500 text-center">Anniversary Event</h1>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM72kUw15QSO_uuhV5UGgrg6mW9sHc9YF02Q&s" alt="Event 1" className="rounded-lg shadow-xl w-full h-80 object-cover" />
        <img src="https://images.pexels.com/photos/16879007/pexels-photo-16879007/free-photo-of-wedding-reception-venue.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Event 2" className="rounded-lg shadow-xl w-full h-80 object-cover" />
        <img src="https://images.pexels.com/photos/17023005/pexels-photo-17023005/free-photo-of-beautifully-decorated-tables-in-a-luxury-restaurant-hall.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Event 3" className="rounded-lg shadow-xl w-full h-80 object-cover" />
        <img src="https://images.pexels.com/photos/12846023/pexels-photo-12846023.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Event 4" className="rounded-lg shadow-xl w-full h-80 object-cover" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWDkVnRQwID1nsNEXlJ8ZQ5deNNdRmtTqSA&s" alt="Event 5" className="rounded-lg shadow-xl w-full h-80 object-cover" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ERb9QvoSt_D4MHidEULdwdnilOiLzt53lQ&s" alt="Event 6" className="rounded-lg shadow-xl w-full h-80 object-cover" />
      </div>

      {/* Wedding Packages Section */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-pink-500">Anniversary Packages</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center text-gray-300">
            <span>Package 1: Basic Anniversary - $1000</span>
            <button
              onClick={() => handlePackageSelection(1000)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Select
            </button>
          </li>
          <li className="flex justify-between items-center text-gray-300">
            <span>Package 2: Premium Anniversary - $2500</span>
            <button
              onClick={() => handlePackageSelection(2500)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Select
            </button>
          </li>
          <li className="flex justify-between items-center text-gray-300">
            <span>Package 3: Luxury Anniversary - $5000</span>
            <button
              onClick={() => handlePackageSelection(5000)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Select
            </button>
          </li>
        </ul>
      </div>

      {/* Manage Your Anniversary Section */}
      <div className="mt-10 bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-pink-500">Manage Your Anniversary Event</h2>
        <p className="text-gray-300 mb-4">We provide complete anniversary management services, including venue, catering, decorations, and more to make your event special.</p>
        <p className="text-gray-300 mb-6">Total Price: ${selectedPrice}</p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition">
          Confirm Purchase
        </button>
      </div>
    </div>
  );
};

export default Anniversary;
