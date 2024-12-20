import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileDetails = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://linkup-server-o8ro.onrender.com/api/profile/${profileId}`);
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile details:", error);
      }
    };

    fetchProfile();
  }, [profileId]);

  if (!profile) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-900">
        <p className="text-lg font-medium text-slate-400 animate-pulse">
          Loading profile, please wait...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-800 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="w-full max-w-3xl bg-slate-700 shadow-lg rounded-xl p-6 sm:p-8 lg:p-10 text-slate-200">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 border-b border-slate-600 pb-6">
          <img
            src={profile.profilePic ? `https://linkup-server-o8ro.onrender.com/${profile.profilePic}` : "/default-avatar.jpg"}
            alt={`${profile.name}'s profile`}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-slate-600 shadow-md"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-100">{profile.name}</h1>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              {profile.personality || "No personality info"}
            </p>
            <p className="text-sm sm:text-base text-blue-400 mt-2">
              {profile.email || "Email not available"}
            </p>
          </div>
        </div>
        <div className="mt-6 space-y-4 sm:space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-300">Bio</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              {profile.bio || "No bio available"}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-300">Interests</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              {profile.interests && profile.interests.length > 0
                ? profile.interests.join(", ")
                : "No interests listed"}
            </p>
          </div>
        </div>
        <div className="mt-6 border-t border-slate-600 pt-4 text-center">
          <p className="text-sm text-slate-500">
            Profile created on: {profile.updatedAt || "Not available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
