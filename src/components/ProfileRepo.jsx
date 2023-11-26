import React, { useEffect, useState } from "react";
import fork from "../assets/Nesting.svg";
import star from "../assets/Star.svg";
import shield from "../assets/Chield_alt.svg";

export default function ProfileRepo({ data }) {
  const [repos, setRepos] = useState([]);

  function returnDays(date) {
    if (date) {
      const givenDate = new Date(date);
      const currentDate = new Date();

      const differenceInMilliseconds = currentDate - givenDate;
      const differenceInDays = Math.floor(
        differenceInMilliseconds / (1000 * 60 * 60 * 24)
      );

      if (differenceInDays >= 365) {
        const years = Math.floor(differenceInDays / 365);
        return years === 1 ? `${years} year` : `${years} years`;
      } else if (differenceInDays >= 31) {
        const months = Math.floor(differenceInDays / 30);
        return months === 1 ? `${months} month` : `${months} months`;
      } else {
        return `${differenceInDays} days`;
      }
    }
  }

  useEffect(() => {
    function fetchRepos() {
      fetch(data?.repos_url)
        .then((res) => res.json())
        .then((data) => {
          setRepos(data);
        })
        .catch((err) => console.log(err));
    }
    fetchRepos();
  }, [data]);

  return (
    <div className="w-full my-10 xs:mx-[5px] md:mx-[200px] grid xs:grid-cols-1 md:grid-cols-2 items-center justify-center  gap-8">
      {repos.map((repo) => (
        <div className="h-auto sm:h-fit-content md:h-40 flex flex-col justify-between space-y-3 bg-gradient-to-r from-[#111729] to-[#1D1B48] p-5 rounded-lg">
          <div>
            <p className="font-bold text-lg text-[#CDD5E0]">{repo?.name}</p>
            <p className="text-slate-400">
              {repo?.description?.substring(0, 120)}
            </p>
          </div>
          <div className="text-sm text-slate-400 flex items-center gap-4">
            {repo.license && (
              <div className="flex gap-2 items-center">
                <img src={shield} alt="fork icon" />
                <p>MIT</p>
              </div>
            )}
            <div className="flex gap-2 items-center">
              <img src={fork} alt="fork icon" />
              <p>{repo?.forks || 0}</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={star} alt="fork icon" />
              <p>{repo?.stargazers_count || 0}</p>
            </div>
            <p>Updated {returnDays(repo?.updated_at)} ago</p>
          </div>
        </div>
      ))}
    </div>
  );
}
