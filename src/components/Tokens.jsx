import { createContext, useContext, useEffect, useState } from "react";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { API_URI } from "../libs/globals";
import axios from "axios";
import { Wrench, Bin } from "./bin";
import TokenGrid from "./TokenGrid";

export default () => {
  const [newToken, setNewToken] = useState("");
  const handleTokenInput = (e) => {
    setNewToken(e.target.value);
  };
  const generateToken = () => {
    let r = randomString();
    setNewToken(r);
  };

  const randomString = (limit = 10) => {
    let strings = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newStrings = "";
    for (let i = 0; i < limit; i++) {
      let idx = Math.floor(Math.random() * (strings.length - 1));
      newStrings += strings[idx];
    }
    return newStrings;
  };

  const handleNewToken = async (e) => {
    e.preventDefault();
    if (newToken !== "") {
      await axios
        .post(API_URI + "/admin-new-token", { new_token: newToken })
        .then((e) => {
          alert("successfully created new token!");
        })
        .catch((e) => {
          console.error(e.message);
          alert(`Error: ${e.message}`);
        });
    }
  };
  useEffect(() => {
    generateToken();
  }, []);

  return (
    <div className="table-view fade-in">
      <h2 className="ckk3">Manage Tokens</h2>
      <details className="new-token-above">
        <summary>Add a new Token</summary>
        <div className="new-token">
          <form onSubmit={handleNewToken}>
            <input
              type="text"
              placeholder="Enter token text...."
              value={newToken}
              name="new-token"
              onChange={handleTokenInput}
            />
            <button type="button" onClick={generateToken}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>
              Generate
            </button>
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              Add
            </button>
          </form>
        </div>
      </details>
      <div className="grid-js">
        <TokenGrid />
      </div>
    </div>
  );
};
