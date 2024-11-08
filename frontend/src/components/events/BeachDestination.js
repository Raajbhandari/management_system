// import React, { useState } from 'react'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';

// const BeachDestination = () => {
//   const [guestList, setGuestList] = useState([]);
//   const [guest, setGuest] = useState('');
//   const [decoration, setDecoration] = useState('Standard');
//   const [lighting, setLighting] = useState('Basic');
//   const [catering, setCatering] = useState('Buffet');
  
//   const navigate = useNavigate();

//   const handleAddGuest = () => {
//     setGuestList([...guestList, guest]);
//     setGuest('');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      
//       {/* Navbar */}
//       <nav className="bg-white shadow-lg fixed top-0 w-full h-16 z-50">
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

//       {/* Add margin-top to push content below navbar */}
//       <div className="mb-6 mt-20">
//         <img
//           src=''
//           alt="Destination Wedding"
//           className="rounded-lg w-full h-96 object-cover mt-16" // Added margin-top for the image
//         />
//         <h1 className="text-4xl font-bold mt-4">Beach Wedding</h1>
//         <p className="text-xl mt-2 mb-4">
//           Experience a luxurious destination wedding in the most exotic locations. Customize your wedding to perfection with a range of options.
//         </p>
//         <div className="text-2xl font-bold mb-4"> Rs.{5000*50}</div>
//         <div className="flex space-x-4 mb-6">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Book Now
//           </button>
//           <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700">
//             Add to Wishlist
//           </button>
//         </div>
//       </div>

//       {/* Customization Options */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h2 className="text-2xl font-semibold mb-4">Wedding Customization</h2>
//         <div className="mb-4">
//           <label className="block text-lg font-medium mb-2">Decoration:</label>
//           <select
//             value={decoration}
//             onChange={(e) => setDecoration(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//           >
//             <option value="Standard">Standard -  Rs.{1000*50}</option>
//             <option value="Premium">Premium -  Rs.{2500*50}</option>
//             <option value="Luxury">Luxury -  Rs.{5000*50}</option>
//           </select>
//         </div>

//         {/* Lighting Option */}
//         <div className="mb-4">
//           <label className="block text-lg font-medium mb-2">Lighting:</label>
//           <select
//             value={lighting}
//             onChange={(e) => setLighting(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//           >
//             <option value="Basic">Basic - Rs.{500*50}</option>
//             <option value="Advanced">Advanced - Rs.{50*1000}</option>
//             <option value="Luxury">Luxury - Rs.{50*2000}</option>
//           </select>
//         </div>

//         {/* Catering Option */}
//         <div className="mb-4">
//   <label className="block text-lg font-medium mb-2">Catering:</label>
//   <select
//     value={catering}
//     onChange={(e) => setCatering(e.target.value)}
//     className="w-full p-2 border border-gray-300 rounded-lg"
//   >
//     <option value="Buffet">
//       Buffet - Rs.{50 * 2000}
//     </option>
//     <option value="A La Carte">
//       A La Carte - <i class="fa fa-inr" aria-hidden="true"></i>Rs.{3500 * 50}
//     </option>
//     <option value="Luxury">
//       Luxury Dining - <i className="fa fa-rupee" style={{ fontSize: '24px' }}></i>Rs.{5000 * 50}
//     </option>
//   </select>
// </div>

//       </div>

//       {/* Guest List */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Guest List</h2>
//         <div className="flex mb-4">
//           <input
//             type="text"
//             placeholder="Add guest name"
//             value={guest}
//             onChange={(e) => setGuest(e.target.value)}
//             className="p-2 border border-gray-300 rounded-lg w-full mr-2"
//           />
//           <button
//             onClick={handleAddGuest}
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Add Guest
//           </button>
//         </div>

//         <ul className="list-disc pl-5">
//           {guestList.map((guest, index) => (
//             <li key={index} className="text-lg">{guest}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BeachDestination;


// src/components/BeachDestination.js
import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { WishlistContext } from '../../contexts/WishlistContext';
const BeachDestination = () => {
  const [guestList, setGuestList] = useState([]);
  const [guest, setGuest] = useState('');
  const [decoration, setDecoration] = useState('Standard');
  const [lighting, setLighting] = useState('Basic');
  const [catering, setCatering] = useState('Buffet');

  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const handleAddGuest = () => {
    if (guest.trim() !== '') {
      setGuestList([...guestList, guest]);
      setGuest('');
    }
  };

  const handleBookNow = () => {
    const event = {
      name: "Beach Wedding",
      price: 5000 * 50,
      decoration,
      lighting,
      catering,
      imageUrl: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    };
    addToCart(event);
    navigate('/cart'); // Redirect to Cart page after adding
  };

  const handleAddToWishlist = () => {
    const event = {
      name: "Beach Wedding",
      price: 5000 * 50,
      decoration,
      lighting,
      catering,
      imageUrl: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    };
    addToWishlist(event);
    navigate('/wishlist'); // Redirect to Wishlist page after adding
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      
      {/* Navbar is included globally via App.js */}

      {/* Add margin-top to push content below navbar */}
      <div className="mb-6 mt-20">
        <img
          src='https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt="Beach Wedding"
          className="rounded-lg w-full h-96 object-cover"
        />
        <h1 className="text-4xl font-bold mt-4">Beach Wedding</h1>
        <p className="text-xl mt-2 mb-4">
          Experience a luxurious beach wedding in the most exotic locations. Customize your wedding to perfection with a range of options.
        </p>
        <div className="text-2xl font-bold mb-4">
          <FontAwesomeIcon icon={faRupeeSign} /> {5000 * 50}
        </div>
        <div className="flex space-x-4 mb-6">
          {/* Book Now Button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
            onClick={handleBookNow}
          >
            <FontAwesomeIcon icon={faRupeeSign} className="mr-2" /> Book Now
          </button>
          {/* Add to Wishlist Button */}
          <button
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700 flex items-center"
            onClick={handleAddToWishlist}
          >
            <FontAwesomeIcon icon={faRupeeSign} className="mr-2" /> Add to Wishlist
          </button>
        </div>
      </div>

      {/* Customization Options */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Wedding Customization</h2>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Decoration:</label>
          <select
            value={decoration}
            onChange={(e) => setDecoration(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="Standard">Standard - <FontAwesomeIcon icon={faRupeeSign} /> {1000 * 50}</option>
            <option value="Premium">Premium - <FontAwesomeIcon icon={faRupeeSign} /> {2500 * 50}</option>
            <option value="Luxury">Luxury - <FontAwesomeIcon icon={faRupeeSign} /> {5000 * 50}</option>
          </select>
        </div>

        {/* Lighting Option */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Lighting:</label>
          <select
            value={lighting}
            onChange={(e) => setLighting(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="Basic">Basic - <FontAwesomeIcon icon={faRupeeSign} /> {500 * 50}</option>
            <option value="Advanced">Advanced - <FontAwesomeIcon icon={faRupeeSign} /> {1000 * 50}</option>
            <option value="Luxury">Luxury - <FontAwesomeIcon icon={faRupeeSign} /> {2000 * 50}</option>
          </select>
        </div>

        {/* Catering Option */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Catering:</label>
          <select
            value={catering}
            onChange={(e) => setCatering(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="Buffet">Buffet - <FontAwesomeIcon icon={faRupeeSign} /> {50 * 2000}</option>
            <option value="A La Carte">A La Carte - <FontAwesomeIcon icon={faRupeeSign} /> {3500 * 50}</option>
            <option value="Luxury">Luxury Dining - <FontAwesomeIcon icon={faRupeeSign} /> {5000 * 50}</option>
          </select>
        </div>
      </div>

      {/* Guest List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Guest List</h2>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add guest name"
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full mr-2"
          />
          <button
            onClick={handleAddGuest}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Guest
          </button>
        </div>

        <ul className="list-disc pl-5">
          {guestList.map((guest, index) => (
            <li key={index} className="text-lg">{guest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeachDestination;
