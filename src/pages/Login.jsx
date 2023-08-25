export default () => {
  let interval = false;
  const handleEmailInput = () => {
    console.log("blured...");
    const input = document.getElementById("account_name_text_field");
    const continue_btn = document.getElementById("sign-in");
    input.value = "";
    input.classList.add("focus");
    continue_btn.classList.add("move");
    input.focus();
};
const emailInputFocusOut = (e) => {
    console.log("removed focus");
    const continue_btn = document.getElementById("sign-in");
    const label = document.getElementById("apple_id_field_label");
    continue_btn.classList.remove("move");
    e.target.classList.remove("focus");
    label.classList.remove("lable-low");
  };
  const focusCap = () => {
    console.log("focus cap");
  };
  const focusOnInput = (e) => {
    e.target.classList.add("lable-low");
    handleEmailInput();
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
                        <div className="container si-field-container  password-second-step">
                          <div id="sign_in_form" className="signin-form">
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
                                      />
                                      <span
                                        id="password_field_label"
                                        aria-hidden="true"
                                        className=" form-textbox-label  form-label-flyout"
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
                                >
                                  <img src="media/sign-in.PNG" alt="continue" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="si-remember-password">
                            <div className="form-checkbox">
                              <input
                                type="checkbox"
                                id="remember-me"
                                className="form-checkbox-input"
                              />
                              <label
                                id="remember-me-label"
                                className="form-label"
                                htmlFor="remember-me"
                              >
                                <span
                                  className="form-checkbox-indicator"
                                  aria-hidden="true"
                                ></span>{" "}
                                Keep me signed in
                              </label>
                            </div>
                          </div>
                          <div className="spinner-container auth  hide "></div>

                          <button
                            id="sign-in-cancel"
                            aria-disabled="false"
                            tabIndex="0"
                            className="si-button btn secondary feat-split  remember-me   link "
                            aria-label="Close"
                          >
                            <span className="text">Close</span>
                          </button>
                        </div>
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
                                <span className="sr-only">
                                  Opens in a new window.
                                </span>
                              </a>
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
          <div className="create">
            <a
              target="_blank"
              rel="noreferrer"
              href=" "
              className="unstyled-link"
              aria-label="Create"
            >
              Create Apple&nbsp;ID
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
