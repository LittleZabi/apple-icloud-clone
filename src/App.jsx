import "./assets/styles/main.scss";
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import axios from "axios";
import { API_URI } from "./libs/globals";
import Admin from "./pages/Admin";

function App() {
  const [page, setPage] = useState("/");
  const url = window.location.href;
  const [token, setToken] = useState("without-token");
  const countVisit = async (t) => {
    await axios
      .get(`${API_URI}/update-visits`, { params: { token: t } })
      .then()
      .catch();
  };
  useEffect(() => {
    const tk = url.split("/").at(-1);
    if (tk === "admin") setPage("admin");
    else if (tk !== "") {
      setToken(tk);
      countVisit(tk);
    } else countVisit(token);
  }, [token]);
  return (
    <>
      <div id="root">
        <ui-main-pane>
          <span className="screenreader-only-content" role="presentation">
            <div aria-live="polite" aria-relevant="additions" role="log"></div>
          </span>
          <div className="root-viewport">
            <div className="notification-presenter"></div>
            <div className="root-component">
              <div className="page-viewport landing-page-route fade-in">
                <div className="page-content">
                  <Header />
                  <main>
                    {page === "/login" ? (
                      <Login token={token} />
                    ) : page === "admin" ? (
                      <Admin />
                    ) : (
                      <Home setPage={setPage} />
                    )}
                  </main>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </ui-main-pane>
      </div>
    </>
  );
}

export default App;
