import React, { useState } from 'react';
import usa from '../assets/images/usa.jpg';
import img from '../assets/images/img.jpg';
const Filter = ({ owners, lawFirms, attorneys }) => {
    const [check, setCheck] = useState(false);
    return (
        <>
            <div>
                <div className="flex-shrink-0">
                    <ul className="flex space-x-6 p-2 bg-gray-100 rounded-lg shadow-md">
                        <li className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer" onClick={() => setCheck(!check)}>
                            🔎 Filter
                        </li>
                        <li className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer">
                            🦈 Share
                        </li>
                        <li className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer">
                            🔗 Link
                        </li>
                    </ul>
                </div>
                <br></br>

            </div>
            {check ?
                <aside className="w-70 top-20 right-10 p-4 bg-gray-50 shadow-md rounded-lg">
                    {/* Status Section */}
                    <div className="mb-6">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Status</label>
                        <ul className="flex flex-wrap gap-2">
                            <li className="cursor-pointer rounded-lg font-medium border border-blue-500 px-3 py-1 hover:text-blue-600 hover:border-blue-700">
                                All
                            </li>
                            <li className="cursor-pointer rounded-lg border font-medium border-blue-500 px-3 py-1  hover:text-blue-600 hover:border-blue-700">
                                🟢Registered
                            </li>
                            <li className="cursor-pointer rounded-lg border font-medium border-blue-500 px-3 py-1  hover:text-blue-600 hover:border-blue-700">
                                🟡Pending
                            </li>
                            <li className="cursor-pointer rounded-lg border font-medium border-blue-500 px-3 py-1  hover:text-blue-600 hover:border-blue-700">
                                🔴Abandoned
                            </li>
                            <li className="cursor-pointer rounded-lg border font-medium border-blue-500 px-3 py-1  hover:text-blue-600 hover:border-blue-700">
                                🔵Others
                            </li>
                        </ul>
                    </div>

                    {/* Owners, Law Firms, and Attorneys Section */}
                    <div className="mb-6">
                        <div className="mb-4">
                            <ul className="font-semibold text-gray-700 space-y-1">
                                <li className="cursor-pointer hover:text-blue-600 text-black font-bold">Owners</li>
                                <div className='h-80 overflow-scroll overflow-x-hidden'>
                                    {owners.map((owner, index) => (
                                        <li key={index} className="flex items-center p-2 bg-white rounded-md shadow-sm">
                                            <input type="checkbox" className="mr-2 rounded" />
                                            <span>{owner.key}</span>
                                        </li>
                                    ))}
                                </div>
                                <li className="cursor-pointer hover:text-blue-600">Categories</li>
                                <div className='h-80 overflow-scroll overflow-x-hidden'>
                                    {lawFirms.map((firm, index) => (
                                        <li key={index} className="flex items-center p-2 bg-white rounded-md shadow-sm">
                                            <input type="checkbox" checked={firm.checked} className="mr-2 rounded" />

                                            <span>Class_code </span><span>{firm.key}</span>
                                        </li>
                                    ))}
                                </div>
                                <li className="cursor-pointer hover:text-blue-600">Attorneys</li>
                                <ul className="space-y-3">
                                    <div className='h-80 overflow-scroll overflow-x-hidden'>
                                        {attorneys.map((attorney, index) => (
                                            <li key={index} className="flex items-center p-2 bg-white rounded-md shadow-sm">
                                                <input type="checkbox" checked={attorney.checked} className="mr-2 rounded" />
                                                <span>{attorney.key}</span>
                                            </li>
                                        ))}
                                    </div>
                                </ul>
                            </ul>
                        </div>

                    </div>

                    {/* Display Section */}
                    <div className="p-2 bg-white rounded-md shadow-sm">
                        <p className="font-semibold text-gray-700">Display</p>
                        <span className="flex space-x-4 mt-2">
                            <p className="cursor-pointer hover:text-blue-600">Grid View</p>
                            <p className="cursor-pointer hover:text-blue-600">List View</p>
                        </span>
                    </div>
                </aside> :
                <aside className="p-4  w-75 bg-white shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Apply for Trademark</h3>
                    <hr className="mb-4" />
                    <p className="text-gray-600 mb-4">Select countries to protect your logo Trademark</p>
                    <hr className="mb-4" />
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Trademark Name</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Search"
                            checked
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Country Selected</label>
                        <div className="flex items-center mb-2">
                            <img src={usa} alt="country-img" className="w-8 h-8 mr-[20px] object-cover rounded-full" />
                            <div>
                                <p className="text-gray-800">United States</p>
                                <p className="text-gray-600">$99 / 1 class + gov fee</p>
                            </div>
                        </div>
                        <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">Apply Now</button>
                    </div>
                    <hr className="mb-4" />
                    <div className="text-center">
                        <img src={img} alt="cam-img" className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-gray-600">Drag and drop or upload to search any image</p>
                    </div>
                </aside>}
        </>
    );
};

export default Filter;
