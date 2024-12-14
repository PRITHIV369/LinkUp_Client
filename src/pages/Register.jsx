import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('password', formData.password);
    if (profilePic) {
      data.append('profilePic', profilePic);
    }

    try {
      await axios.post('http://localhost:3000/register', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('User registered successfully!');
    } catch (error) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="w-full h-screen bg-slate-50 flex justify-center items-center">
      <div className="w-[90vw] max-w-lg h-[75vh] flex flex-col text-blue-600 justify-start items-center">
        <b className="text-3xl mb-4">LinkUp</b>
        <div className="w-full h-full flex justify-center items-center">
          <div className="h-full w-full max-w-md flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
            <form
              className="w-full flex flex-col justify-center items-center gap-4"
              onSubmit={handleRegister}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-3 w-full bg-slate-100 rounded-md outline-none focus:border-b-2 focus:border-gray-800"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-3 w-full bg-slate-100 rounded-md outline-none focus:border-b-2 focus:border-gray-800"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="p-3 w-full bg-slate-100 rounded-md outline-none focus:border-b-2 focus:border-gray-800"
              />
              <div className="flex flex-col items-center gap-2 mt-2">
                {profilePic && (
                  <img
                    src={URL.createObjectURL(profilePic)}
                    alt="Profile Preview"
                    className="w-20 h-20 rounded-full object-cover mb-2"
                  />
                )}
                <label
                  htmlFor="profilePic"
                  className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-full transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-sm"
                >
                  {profilePic ? "Change Profile Picture" : "Upload Profile Picture"}
                </label>
                <input
                  type="file"
                  id="profilePic"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  className="hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-700 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
