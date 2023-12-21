import React, { useEffect, useState } from "react";

const SearchTask = ({ task, setSearchResults }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    handleSearch();
  }, [search, task]);
  const handleSearch = () => {
    const newSearch = task.filter((t) => {
      if (t.task.includes(search)) return true;
      else if (search === "") return true;
    });
    setSearchResults(newSearch);
  };
  return (
    <div>
      <input
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchTask;
