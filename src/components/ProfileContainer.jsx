import React, { useEffect, useState } from "react";
import ProfileSearchBar from "./ProfileSearchBar";
import ProfileHead from "./ProfileHead";
import ProfileRepo from "./ProfileRepo";

export default function ProfileContainer() {
  const [userData, setUserData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  async function fetchProfile(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="z-10 w-full flex flex-col items-center my-10 xs:mx-4 sm:mx-10 md:mx-30">
      <ProfileSearchBar
        fetchProfile={fetchProfile}
        userData={userData}
        setSelectedUser={setSelectedUser}
      />
      {selectedUser ? (
        <>
          <ProfileHead data={selectedUser} />
          <ProfileRepo data={selectedUser} />
        </>
      ) : (
        <p className="text-white mt-10">Search for github usernames</p>
      )}
    </div>
  );
}
