// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
//     <div className="min-h-screen flex flex-col justify-center items-center">
//     <h1 className="text-5xl font-bold text-center mb-8">Event Management System</h1>

//       <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Portal</h1>

//       <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-5xl gap-8 px-4">
//         {/* Vendor Section */}
//         <div 
//           className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
//           onClick={() => navigate('/vendor')}
//         >
//           <h2 className="text-2xl font-bold mb-4 text-blue-600">Vendor</h2>
//           <p className="text-gray-600 text-center mb-6">Access vendor-specific tools and management options.</p>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
//             Vendor Portal
//           </button>
//         </div>

//         {/* User Section */}
//         <div 
//           className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
//           onClick={() => navigate('/user/dashboard')}
//         >
//           <h2 className="text-2xl font-bold mb-4 text-green-600">User</h2>
//           <p className="text-gray-600 text-center mb-6">Explore user-specific features and services.</p>
//           <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full">
//             User Portal
//           </button>
//         </div>

//         {/* Admin Section */}
//         <div 
//           className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
//           onClick={() => navigate('/admin')}
//         >
//           <h2 className="text-2xl font-bold mb-4 text-red-600">Admin</h2>
//           <p className="text-gray-600 text-center mb-6">Manage the entire platform from the admin dashboard.</p>
//           <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full">
//             Admin Portal
//           </button>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-extrabold text-center mb-8 text-white">Event Management System</h1>

        <h2 className="text-4xl font-semibold text-center mb-8 text-gray-300">Welcome to the Portal</h2>

        <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-6xl gap-8 px-4">
          {/* Vendor Section */}
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-500 p-8 rounded-xl shadow-xl flex flex-col justify-center items-center w-full md:w-1/3 transition-transform transform hover:scale-110 hover:shadow-2xl cursor-pointer"
            onClick={() => navigate('/vendor')}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Vendor</h2>
            <p className="text-gray-100 text-center mb-6">Access vendor-specific tools and management options.</p>
            <button className="bg-white hover:bg-gray-200 text-indigo-600 font-bold py-2 px-6 rounded-full transition-colors">
              Vendor Portal
            </button>
          </div>

          {/* User Section */}
          <div
            className="bg-gradient-to-r from-green-500 to-teal-500 p-8 rounded-xl shadow-xl flex flex-col justify-center items-center w-full md:w-1/3 transition-transform transform hover:scale-110 hover:shadow-2xl cursor-pointer"
            onClick={() => navigate('/user/dashboard')}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">User</h2>
            <p className="text-gray-100 text-center mb-6">Explore user-specific features and services.</p>
            <button className="bg-white hover:bg-gray-200 text-teal-600 font-bold py-2 px-6 rounded-full transition-colors">
              User Portal
            </button>
          </div>

          {/* Admin Section */}
          <div
            className="bg-gradient-to-r from-red-500 to-pink-500 p-8 rounded-xl shadow-xl flex flex-col justify-center items-center w-full md:w-1/3 transition-transform transform hover:scale-110 hover:shadow-2xl cursor-pointer"
            onClick={() => navigate('/admin')}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Admin</h2>
            <p className="text-gray-100 text-center mb-6">Manage the entire platform from the admin dashboard.</p>
            <button className="bg-white hover:bg-gray-200 text-pink-600 font-bold py-2 px-6 rounded-full transition-colors">
              Admin Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;