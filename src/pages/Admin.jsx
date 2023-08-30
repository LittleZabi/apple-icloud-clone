import { useState, useEffect } from "react";
import Dashboard from "../components/dashboard";
import Login from "../components/Login";
import Cookie from "js-cookie";
import Users from "../components/Users";
import Tokens from "../components/Tokens";
import Logout from "../components/Logout";

export default () => {
  const [view, setView] = useState(
    window.localStorage.getItem("view") ?? "dashboard"
  );
  const [admin, setAdmin] = useState(undefined);
  useEffect(() => {
    if (view !== "login" || view !== "logout")
      window.localStorage.setItem("view", view);
  }, [view]);
  useEffect(() => {
    console.log(Cookie.get("cloud-admin"));
    if (Cookie.get("cloud-admin")) {
      setAdmin(Cookie.get("cloud-admin"));
    } else {
      setView("login");
    }
  }, []);
  return (
    <div className="admin-view">
      <h2 className="kingsolomon">
        {view === "users" ? "APPLE iCloud USERS" : view === 'tokens' ? "MANAGE URL TOKENS" : "Admin " + view}
      </h2>
      <div className="admin-main">
        {view === "login" ? (
          <Login />
        ) : (
          <>
            <div className="admin-left">
              <ul>
                <li>
                  <button
                    onClick={() => setView("dashboard")}
                    className={view === "dashboard" ? "active" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                    <span>Dashboard</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setView("users")}
                    className={view === "users" ? "active" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                    <span>Users</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setView("tokens")}
                    className={view === "tokens" ? "active" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                      />
                    </svg>
                    <span>Tokens</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setView("logout")}
                    className={view === "logout" ? "active" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>

                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="admin-right">
              {view === "users" ? (
                <Users />
              ) : view === "tokens" ? (
                <Tokens />
              ) : view === "logout" ? (
                <Logout />
              ) : (
                <Dashboard admin={admin} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
