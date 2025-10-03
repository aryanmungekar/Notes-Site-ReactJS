import React, { useEffect, useState } from "react";
import lunr from "lunr";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [idx, setIdx] = useState(null);
  const [store, setStore] = useState([]);

  // Load search index from search.json
  useEffect(() => {
    fetch("/search.json")
      .then((res) => res.json())
      .then((data) => {
        const pages = data.pages;
        setStore(pages);

        const lunrIdx = lunr(function () {
          this.ref("url");
          this.field("title");
          this.field("content");

          pages.forEach((page) => this.add(page));
        });

        setIdx(lunrIdx);
      });
  }, []);

  // Perform search when query changes
  useEffect(() => {
    if (!idx || !query.trim()) {
      setResults([]);
      return;
    }

    const searchResults = idx.search(query).map((result) =>
      store.find((p) => p.url === result.ref)
    );

    setResults(searchResults);
  }, [query, idx, store]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-center text-2xl font-bold mb-4">🔍 Search Notes <span className="text-red-600 italic underline text-xl">(Not in working state yet)</span></h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search Notes, Subject Codes..."
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      <ul className="space-y-3">
        {!query && <li className="text-gray-500">Start typing to search...</li>}
        {query && results.length === 0 && (
          <li className="text-red-500">No results found</li>
        )}
        {results.map((item, index) => (
          <li
            key={index}
            className="border border-gray-300 rounded-md p-3 hover:shadow"
          >
            <a
              href={item.url}
              className="font-semibold text-blue-600 hover:underline"
            >
              {item.title}
            </a>
            <p className="text-gray-600 text-sm mt-1">
              {item.content.slice(0, 150)}...
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
