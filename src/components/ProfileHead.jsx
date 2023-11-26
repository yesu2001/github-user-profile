import React from "react";

export default function ProfileHead({ data }) {
  console.log(data);
  return (
    <div>
      <div className="mt-20 flex flex-col sm:flex-row items-center gap-6 items-end text-sm">
        <div className="border-4 border-[#364153] bg-black rounded-xl overflow-hidden">
          <img
            width="120"
            height="120"
            src={
              data?.avatar_url ||
              "https://img.icons8.com/material-rounded/192/FFFFFF/github.png"
            }
            alt="github"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="bg-[#111729] px-4 flex py-3 rounded-lg">
            <p className="text-[#4A5567] border-r font-semibold  border-slate-700 pr-4">
              Followers
            </p>
            <p className="pl-4 text-[#CDD5E0]">{data?.followers || 0}</p>
          </div>
          <div className="bg-[#111729] px-4 flex py-3 rounded-lg">
            <p className="text-[#4A5567] border-r font-semibold  border-slate-700 pr-4">
              Following
            </p>
            <p className="pl-4 text-[#CDD5E0]">{data?.following || 0}</p>
          </div>
          <div className="bg-[#111729] px-4 flex py-3 rounded-lg">
            <p className="text-[#4A5567] border-r font-semibold  border-slate-700 pr-4">
              Location
            </p>
            <p className="pl-4 text-[#CDD5E0]">
              {data?.location || <i>No location.</i>}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-[#CDD5E0] text-3xl font-bold">
          {data?.name || data?.login}
        </p>
        <p className="text-[#CDD5E0] text-sm">
          {data?.bio || "How people build software."}
        </p>
      </div>
    </div>
  );
}
