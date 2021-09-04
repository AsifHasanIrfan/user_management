import React from 'react';

interface IProps{
   user: {
      name: string;
      email: string;
      number: string;
      salary: number;
   };
   handleRemove: (email: string) => void;
}

const User = ({user, handleRemove}: IProps) => {

   return (
      <tbody>
         <tr>
            <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
               <p className="text-gray-900 whitespace-no-wrap">1</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
               <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
               <p className="text-gray-900 whitespace-no-wrap">
                  {user.email}
               </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
               <p className="text-gray-900 whitespace-no-wrap">{user.number}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
               <p className="text-gray-900 whitespace-no-wrap">${user.salary}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <button
               onClick={() => handleRemove(user.email)}
               className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
               Remove
            </button>
            </td>
         </tr>
      </tbody>
   );
};

export default User;