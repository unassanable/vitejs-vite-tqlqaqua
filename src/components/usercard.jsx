// write the component code here
import React from 'react'

const usercard = () => {
    const profilePhoto = "https://th.bing.com/th/id/OIP.5-mDBIk0BFx0D3b7_4ZgtAHaJF?w=154&h=189&c=7&r=0&o=5&dpr=1.4&pid=1.7";
    const name = "John Doe";
    const email = "johndoe@example.com";
    const phone = "+1 (123) 456-7890";
    const address = "1234 Elm Street, Springfield, USA";
  
    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6">
        <img className="w-24 h-24 rounded-full mx-auto" src={profilePhoto} alt="Profile" />
        <div className="text-center mt-4">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600">{email}</p>
          <p className="text-gray-600">{phone}</p>
          <p className="text-gray-600">{address}</p>
        </div>
      </div>
    );
}

export default usercard