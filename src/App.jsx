import "./assets/styles/main.scss";
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import { useState } from "react";
import Login from "./pages/Login"

function App() {
  const [page, setPage] = useState("/");
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
                  <main>{page === "/login" ? <Login /> : <Home setPage={setPage} />}</main>
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
