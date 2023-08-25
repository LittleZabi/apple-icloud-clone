export default ({setPage}) => {
  return (
    <div className="landing-page">
      <div className="hero-wrapper">
        <div className="icloud-animated-hero">
          <video
            src="media/icloud-video.mp4"
            width="430"
            height="388"
            autoPlay=""
            playsInline=""
            loop=""
            x-webkit-airplay="deny"
            title="Animation showing different users' Memojis surrounded by the icons of the apps the user personally uses most"
          ></video>
        </div>
        <div className="landing-page-icloud-hero">
          <div className="clouds">
            <img
              src="https://www.icloud.com/system/icloud.com/2317Hotfix55/en-us/62fa42f6867d6ddd8ebacde0258fdb80.jpg"
              width="430"
              height="388"
              alt=""
              aria-hidden="true"
            />
          </div>
          <h1>iCloud</h1>
        </div>
      </div>
      <div className="landing-page-content">
        <button className="ck3szxc" onClick={()=>setPage('/login')}>Sign In</button>
        <h2 className="description">
          The best place for all your photos, files, notes, mail, and more.
        </h2>
        <div className="tiles">
          <div className="landing-page-tile">
            <div className="tile-icon">
              <img
                src="https://www.icloud.com/system/icloud.com/2317Hotfix55/en-us/e6ffc52737977fe1700d423a10874d0b.png"
                alt="Collection of icons for apps available on iCloud.com, including Mail, Find My, and Reminders"
              />
            </div>
            <div className="tile-title">
              Easily access apps and data from your iPhone on the web
            </div>
            <div className="tile-description">
              iCloud is essential for keeping personal information from your
              devices safe, up to date, and available wherever you are. At
              iCloud.com, you can access your photos, files, and more from any
              web browser. Changes you make will sync to your iPhone and other
              devices, so you’re always up to date.{" "}
            </div>
          </div>
          <div className="landing-page-tile">
            <div className="tile-icon">
              <img
                src="https://www.icloud.com/system/icloud.com/2317Hotfix55/en-us/cb89b6112cb1d8e18fac821612c25717.png"
                alt="Graphic depicting the icons for various iCloud+ benefits, including up to 2TB of storage"
              />
            </div>
            <div className="tile-title">
              More storage plus additional features to protect your privacy
            </div>
            <div className="tile-description">
              Upgrade to iCloud+ to get more storage and additional features
              like iCloud Private Relay, Hide My Email, and HomeKit Secure
              Video. You can even share your subscription with your family.
              Learn more at{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://apple.com/icloud"
                className="unstyled-link"
                aria-label="Learn More at apple.com/icloud (opens in a new tab)"
              >
                apple.com/icloud.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
