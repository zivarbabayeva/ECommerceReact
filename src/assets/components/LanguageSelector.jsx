import React, { useState } from "react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="flex items-right justify-center text-zinc-800 bg-zinc-100 right-10 top-0 absolute ">
     
      <select
        id="language"
        value={selectedLanguage}
        onChange={handleChange}
        className="p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-zinc-200 bg-zinc-100"
      >
        <option value="az">AZ</option>
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
