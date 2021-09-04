import React, { useState } from 'react';
import User from './User';

export interface IUser {
   name: string;
   email: string;
   number: string;
   salary: number;
}

const Users = () => {
   const [userDetails, setUserDetails] = useState<IUser>({} as IUser);
   const [userList, setUserList] = useState<IUser[]>([])
   
   const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
      setUserDetails({ ...userDetails, [e.target.name] : e.target.value });
   }

   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setUserList([...userList, userDetails]);  
      const newUser ={
         name: '',
         email: '',
         number: '',
         salary: 0
      }  
      setUserDetails(newUser)
   }

   const handleRemove = (email: string) => {
      const newUserList = userList.filter(user => user.email !== email)
      setUserList(newUserList)
   }

   return (
      <div className="w-10/12 bg-white mt-8 p-4">
         <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <form onSubmit={onSubmit} className="w-full">
               <div className="md:flex md:items-center mb-6">
                  <div className="w-20">
                     <label className="block text-gray-500 font-medium mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                     Name
                     </label>
                  </div>
                  <div className="w-full">
                     <input name="name" value={userDetails.name} onChange={handleChange} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Write your name" />
                  </div>
                  <div className="w-20">
                     <label className="block text-gray-500 font-medium mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                     Email
                     </label>
                  </div>
                  <div className="w-full">
                     <input name="email" value={userDetails.email} onChange={handleChange} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" placeholder="Enter your email" />
                  </div>
               </div>
               <div className="md:flex md:items-center mb-6">
               <div className="w-20">
                     <label className="block text-gray-500 font-medium mb-1 md:mb-0 pr-4" htmlFor="inline-number">
                     Number
                     </label>
                  </div>
                  <div className="w-full">
                     <input name="number" value={userDetails.number} onChange={handleChange} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-number" type="text" placeholder="Enter your number" />
                  </div>
                  <div className="w-20">
                     <label className="block text-gray-500 font-medium mb-1 md:mb-0 pr-4" htmlFor="inline-salary">
                     Salary
                     </label>
                  </div>
                  <div className="w-full">
                     <input name="salary" value={userDetails.salary} onChange={handleChange} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-salary" type="number" placeholder="Enter your salary" />
                  </div>
               </div>
               <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
               <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
               >
                  Add User
               </button>
            </div>
            </form>
         </div>
         <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 pt-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
               <table className="min-w-full leading-normal">
                  <thead>
                     <tr>
                        <th
                           className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                           No
                        </th>
                        <th
                           className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                           Name
                        </th>
                        <th
                           className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                           Email
                        </th>
                        <th
                           className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                           Phone no.
                        </th>
                        <th
                           className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                           salary
                        </th>
                        <th
                           className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                           Action
                        </th>
                     </tr>
                  </thead>
                  {
                     userList.map((user) =>  <User user={user} key={user.email} handleRemove={handleRemove} />)
                  }
               </table>
            </div>
         </div>
      </div>
   );
};

export default Users;