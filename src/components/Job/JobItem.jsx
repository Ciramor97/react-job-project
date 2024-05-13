import NavbarItem from '../Navbar/NavbarItem.jsx';
import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';

export default function JobItem({
  job: { type, title, description, salary, location, id },
}) {
  const [showMoreDescription, setShowMoreDescription] = useState(false);
  let customDescription = description;
  if (!showMoreDescription) {
    customDescription = description.substring(0, 90) + '...';
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative p-4">
      <div className="mb-6">
        <div className="text-gray-600 my-2">{type}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <div className="mb-5">{customDescription}</div>
      <button
        className="mb-5 text-indigo-500 hover:text-indigo-600"
        onClick={() => setShowMoreDescription((e) => !e)}
      >
        {!showMoreDescription ? 'More' : 'Less'}
      </button>

      <h3 className="text-indigo-500 mb-2">{salary}</h3>

      <div className="border border-gray-100 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="text-orange-700 mb-3">
          {/* <i className="fa-solid fa-location-dot text-lg"></i> */}
          <FaMapMarker className="inline text-lg mr-2 mb-1" />
          {location}
        </div>
        <NavbarItem
          item="Read More"
          url={`/job/${id}`}
          bgColor="indigo-500"
          hoverBgColor="indigo-600"
          fontSize="text-sm"
        />
      </div>
    </div>
  );
}
