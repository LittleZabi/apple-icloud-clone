export default () => {
  return (
    <footer>
      <div className="legal-footer">
        <div className="application-content">
          <div className="legal-footer-content">
            <div className="inner-row" role="presentation">
              <div className="with-separator">
                <a
                  className="systemStatus"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.apple.com/support/systemstatus/"
                  aria-label="System Status (opens in a new tab)"
                >
                  System Status
                </a>
                <div aria-hidden="true" className="separator"></div>
              </div>
              <div className="with-separator">
                <a
                  className="privacy"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.apple.com/legal/privacy/"
                  aria-label="Privacy Policy (opens in a new tab)"
                >
                  Privacy Policy
                </a>
                <div aria-hidden="true" className="separator"></div>
              </div>
              <a
                className="terms"
                target="_blank"
                rel="noreferrer"
                href="https://www.apple.com/legal/internet-services/icloud/"
                aria-label="Terms &amp; Conditions (opens in a new tab)"
              >
                Terms &amp; Conditions
              </a>
            </div>
            <div className="inner-row" role="presentation">
              <span className="copyright">
                Copyright © 2023 Apple Inc. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
