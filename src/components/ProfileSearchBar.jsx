import React, { useState } from "react";
import searchIcon from "../assets/Search.svg";

export default function ProfileSearchBar({
  fetchProfile,
  userData,
  setSelectedUser,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    setOpen(true);
    e.preventDefault();
    fetchProfile(searchValue);
    if (userData) {
      setLoading(false);
    }
  };

  const selectProfile = () => {
    setSelectedUser(userData);
    setOpen(false);
  };

  return (
    <div>
      <div className="bg-[#364153] w-[350px] flex gap-3 py-3 px-4 rounded-md">
        <img src={searchIcon} alt="search icon" />
        <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            className="bg-transparent outline-none text-white w-full"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </div>
      {!loading && userData && open && (
        <div className="w-[340px] absolute bg-[#20293A] space-y-2 mt-2 p-2 rounded-lg">
          <div
            className="flex items-center cursor-pointer gap-4 p-2 hover:bg-slate-600 rounded-md"
            onClick={selectProfile}
          >
            <div className="bg-black rounded-md overflow-hidden">
              <img
                width="50"
                height="50"
                src={
                  userData?.avatar_url ||
                  "https://img.icons8.com/material-rounded/192/FFFFFF/github.png"
                }
                alt="github"
              />
            </div>
            <div>
              <p className="text-[#CDD5E0]">
                {userData?.name || userData?.login}
              </p>
              <p className="text-[#CDD5E0] text-xs">{userData?.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
