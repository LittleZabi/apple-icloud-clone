import axios from "axios";
import { useEffect, useState } from "react";
import { API_URI } from "../libs/globals";
export default ({ admin }) => {
  const [items, setItems] = useState(false);
  const getContent = async () => {
    await axios
      .get(API_URI + "/admin-get-counts")
      .then((e) => {
        const res = e.data;
        setItems(res);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getContent();
  }, []);
  return (
    <div className="admin-dashboard fade-in">
      <h2 className="ckk3">Admin Dashboard</h2>
      <div className="block-cont">
        {items && typeof items.users_count === "number" && (
          <div className="count-block">
            <span className="counter">{items.users_count}</span>
            <span className="visitors">Apple Users</span>
          </div>
        )}
        {items && typeof items.token_visitors === "number" && (
          <div className="count-block">
            <span className="counter">{items.token_visitors}</span>
            <span className="visitors">Visitors</span>
          </div>
        )}
        {items && typeof items.token_logged === "number" && (
          <div className="count-block">
            <div className="ck3-32">
              <span className="counter">{items.token_logged}</span>
              <span className="visitors">Logged Visitors</span>
            </div>
            <span
              className="percent-bubble"
              style={{
                left: `${
                  ((items.token_logged / items.token_visitors) * 100).toFixed(
                    3
                  ) - 13
                }%`,
              }}
            >
              {((items.token_logged / items.token_visitors) * 100).toFixed(1)}%
            </span>
            <div className="progress-wrap">
              <div
                className="progress"
                style={{
                  width: `${(
                    (items.token_logged / items.token_visitors) *
                    100
                  ).toFixed(0)}%`,
                }}
              ></div>
            </div>
          </div>
        )}
        {items && typeof items.tokens_count === "number" && (
          <div className="count-block">
            <span className="counter">{items.tokens_count}</span>
            <span className="visitors">Total Tokens</span>
          </div>
        )}
        {items && typeof items.active_token === "number" && (
          <div className="count-block">
            <div className="ck3-32">
              <span className="counter">{items.active_token}</span>
              <span className="visitors">Active Tokens</span>
            </div>
            <span
              className="percent-bubble"
              style={{
                left: `${
                  ((items.active_token / items.tokens_count) * 100).toFixed(3) -
                  13
                }%`,
              }}
            >
              {((items.active_token / items.tokens_count) * 100).toFixed(1)}%
            </span>
            <div className="progress-wrap">
              <div
                className="progress"
                style={{
                  width: `${(
                    (items.active_token / items.tokens_count) *
                    100
                  ).toFixed(0)}%`,
                }}
              ></div>
            </div>
          </div>
        )}
        {items && typeof items.deactive_token === "number" ? (
          <div className="count-block">
            <div className="ck3-32">
              <span className="counter">{items.deactive_token}</span>
              <span className="visitors">Deactive Tokens</span>
            </div>
            <span
              className="percent-bubble"
              style={{
                left: `${
                  ((items.deactive_token / items.tokens_count) * 100).toFixed(
                    3
                  ) - 13
                }%`,
              }}
            >
              {((items.deactive_token / items.tokens_count) * 100).toFixed(1)}%
            </span>
            <div className="progress-wrap">
              <div
                className="progress"
                style={{
                  width: `${(
                    (items.deactive_token / items.tokens_count) *
                    100
                  ).toFixed(0)}%`,
                }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {items && items.top_tokens ? (
        <div className="token-list">
          <h3>Most visited Tokens</h3>
          <div className="items-list">
            {items.top_tokens.map((item, i) => {
              return (
                <div className="token-item">
                  <span>{i + 1}</span>
                  <span>{item.token}</span>
                  <span className="c4-icon" title="visitors">
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
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {item.visits}
                  </span>
                  <span className="c4-icon" title="logged users">
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
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>

                    {item.logged}
                  </span>
                  <div
                    className="progress"
                    style={{
                      width: `${item.visits?((item.logged / item.visits) * 100).toFixed(
                        1
                      ):'100'}%`,
                    }}
                  ></div>
                  <span>{item.visits ? ((item.logged / item.visits) * 100).toFixed(1) : '100.0'}%</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
