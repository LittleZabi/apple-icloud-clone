import Cookies from 'js-cookie'
export default () => {
  const handleForm = (e) => {
    e.preventDefault();
    Cookies.remove('cloud-admin')
    window.location.reload()
  };
  return (
    <div className="login fade-in">
      <h2>Admin Login</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="username">
            Did you want to logout from admin session. click on the button to logout and then you can not be able to manage iCloud DB.
        </label>

        <button
          type="submit"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "28px 0 0 0",
            fontSize: "14px",
            cursor:'pointer'
          }}
        >
          Sign Out
          <svg
            style={{ width: "23px", marginLeft: "9px" }}
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
        </button>
      </form>
    </div>
  );
};
