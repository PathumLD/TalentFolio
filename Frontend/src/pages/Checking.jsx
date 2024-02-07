// import React, { useState } from 'react';
// import Modal from '../components/Modal';


// const YourComponent = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>

//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <div className='flex items-center justify-center gap-6 mx-auto '>
//         <button className='px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue' onClick={closeModal}>Candidate</button>
//         <button className='px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue' onClick={closeModal}>Company</button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default YourComponent;


        // form

//         import { FaUserCircle, FaPhotoVideo } from "react-icons/fa";

// import React from 'react'
// import { FaUserCircle, FaPhotoVideo } from "react-icons/fa";

// const CandidateSignUp = () => {
//   return (
//     <>
//      <form>
//       <div className="space-y-12">
//         <div className="pb-12 border-b border-gray-900/10">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             This information will be displayed publicly so be careful what you share.
//           </p>

//           <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-4">
//               <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
//                 Username
//               </label>
//               <div className="mt-2">
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <span className="flex items-center pl-3 text-gray-500 select-none sm:text-sm">workcation.com/</span>
//                   <input
//                     type="text"
//                     name="username"
//                     id="username"
//                     autoComplete="username"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     placeholder="janesmith"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//                 About
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="about"
//                   name="about"
//                   rows={3}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   defaultValue={''}
//                 />
//               </div>
//               <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
//                 Photo
//               </label>
//               <div className="flex items-center mt-2 gap-x-3">
//                 <FaUserCircle className="w-12 h-12 text-gray-300" aria-hidden="true" />
//                 <button
//                   type="button"
//                   className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                 >
//                   Change
//                 </button>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
//                 Cover photo
//               </label>
//               <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
//                 <div className="text-center">
//                   <FaPhotoVideo className="w-12 h-12 mx-auto text-gray-300" aria-hidden="true" />
//                   <div className="flex mt-4 text-sm leading-6 text-gray-600">
//                     <label
//                       htmlFor="file-upload"
//                       className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                     >
//                       <span>Upload a file</span>
//                       <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="pb-12 border-b border-gray-900/10">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

//           <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
//                 First name
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="first-name"
//                   id="first-name"
//                   autoComplete="given-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
//                 Last name
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="last-name"
//                   id="last-name"
//                   autoComplete="family-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-4">
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
//                 Country
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="country"
//                   name="country"
//                   autoComplete="country-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option>United States</option>
//                   <option>Canada</option>
//                   <option>Mexico</option>
//                 </select>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//                 Street address
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="street-address"
//                   id="street-address"
//                   autoComplete="street-address"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 City
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                 State / Province
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="region"
//                   id="region"
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                 ZIP / Postal code
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postal-code"
//                   id="postal-code"
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="pb-12 border-b border-gray-900/10">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             We'll always let you know about important changes, but you pick what else you want to hear about.
//           </p>

//           <div className="mt-10 space-y-10">
//             <fieldset>
//               <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
//               <div className="mt-6 space-y-6">
//                 <div className="relative flex gap-x-3">
//                   <div className="flex items-center h-6">
//                     <input
//                       id="comments"
//                       name="comments"
//                       type="checkbox"
//                       className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="comments" className="font-medium text-gray-900">
//                       Comments
//                     </label>
//                     <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
//                   </div>
//                 </div>
//                 <div className="relative flex gap-x-3">
//                   <div className="flex items-center h-6">
//                     <input
//                       id="candidates"
//                       name="candidates"
//                       type="checkbox"
//                       className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="candidates" className="font-medium text-gray-900">
//                       Candidates
//                     </label>
//                     <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
//                   </div>
//                 </div>
//                 <div className="relative flex gap-x-3">
//                   <div className="flex items-center h-6">
//                     <input
//                       id="offers"
//                       name="offers"
//                       type="checkbox"
//                       className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="offers" className="font-medium text-gray-900">
//                       Offers
//                     </label>
//                     <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
//                   </div>
//                 </div>
//               </div>
//             </fieldset>
//             <fieldset>
//               <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
//               <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
//               <div className="mt-6 space-y-6">
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-everything"
//                     name="push-notifications"
//                     type="radio"
//                     className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
//                     Everything
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-email"
//                     name="push-notifications"
//                     type="radio"
//                     className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
//                     Same as email
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-nothing"
//                     name="push-notifications"
//                     type="radio"
//                     className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
//                     No push notifications
//                   </label>
//                 </div>
//               </div>
//             </fieldset>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-end mt-6 gap-x-6">
//         <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Save
//         </button>
//       </div>
//     </form>
//     </>
//   )
// }

// export default CandidateSignUp




// import React, { useState } from 'react';
// import { FaPlus } from 'react-icons/fa';
// import { HiCheck, HiX } from 'react-icons/hi';

// const CandidateProfileInfo = () => {
//   const [bioEditing, setBioEditing] = useState(false);
//   const [linkedinEditing, setLinkedinEditing] = useState(false);
//   const [githubEditing, setGithubEditing] = useState(false);
//   const [websiteEditing, setWebsiteEditing] = useState(false);

//   const handleEditStart = (section) => {
//     switch (section) {
//       case 'bio':
//         setBioEditing(true);
//         break;
//       case 'linkedin':
//         setLinkedinEditing(true);
//         break;
//       case 'github':
//         setGithubEditing(true);
//         break;
//       case 'website':
//         setWebsiteEditing(true);
//         break;
//       // Add more cases for other sections if needed
//       default:
//         break;
//     }
//   };

//   const handleEditEnd = (section) => {
//     switch (section) {
//       case 'bio':
//         setBioEditing(false);
//         break;
//       case 'linkedin':
//         setLinkedinEditing(false);
//         break;
//       case 'github':
//         setGithubEditing(false);
//         break;
//       case 'website':
//         setWebsiteEditing(false);
//         break;
//       // Add more cases for other sections if needed
//       default:
//         break;
//     }
//   };

//   return (
//     <>
//       <div className='pb-6 border-[#001A23]/50 border-b-2'>
//         <div className='flex justify-center '>
//           <div className='flex justify-center w-24 h-24 mt-6 bg-gray-200 rounded-full outline outline-gray-300 outline-offset-4 md:w-32 md:h-32 '>
//             <img src={dp} alt="candidate profile" className='w-40 rounded-full '/>
//           </div>
//         </div>
//         <h1 className='mt-4 text-3xl font-bold text-center text-blue '>Pathum Lakshan</h1>
//         <h1 className='text-xl font-medium text-center text-blue'>Software Engineer</h1>
//       </div>

//       {/* Basic Details Section */}
//       <div className='border-[#001A23]/50 border-b-2 '>
//       <div className='mx-4 my-6 '>
//         <h3 className='mt-4 text-xl font-bold text-primary-text'>Basic Details</h3>

//       {/* Bio Section */}
//       <div className='flex flex-col items-start mt-4 '>
//         <label htmlFor="bio" className='font-medium text-blue-text'>
//           Your Bio
//         </label>
//         <div
//           id="bio"
//           name="bio"
//           className='p-2 text-justify rounded-md text-md text-primary-text'
//           contentEditable={true}
//           onClick={() => handleEditStart('bio')}
//           onBlur={() => handleEditEnd('bio')}
//           dangerouslySetInnerHTML={{
//             __html:
//               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium',
//           }}
//         />

//         {bioEditing && (
//           <div className='flex items-center gap-6 mt-1 ml-auto'>
//             <HiCheck className='m-2 text-xl rounded-full hover:bg-green-600 hover:text-white' />
//             <HiX className='m-2 text-xl rounded-full hover:bg-red-600 hover:text-white' />
//           </div>
//         )}
//       </div>

//       {/* LinkedIn Section */}
//       {/* ... (similar code structure for LinkedIn, Github, Personal Website) */}

//       {/* ... (existing code) */}

//     </>
//   );
// };

// export default CandidateProfileInfo;
